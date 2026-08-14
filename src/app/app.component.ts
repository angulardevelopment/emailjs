import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from './email.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contactForm: FormGroup;
  
  // Signals for state management
  sendMethod = signal<'send' | 'sendForm'>('send');
  isLoading = signal<boolean>(false);
  statusMessage = signal<string | null>(null);
  isSuccess = signal<boolean>(false);
  
  // Environment credentials check for presentation mode
  isConfigured = environment.emailjs.publicKey !== 'YOUR_PUBLIC_KEY';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.minLength(2)]],
      user_email: ['', [Validators.required, Validators.email]],
      to_email: [''], // Hidden/Optional input for sendForm recipient matching
      subject: ['Talk Inquiry: Angular Best Practices', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  setMethod(method: 'send' | 'sendForm'): void {
    this.sendMethod.set(method);
    this.statusMessage.set(null);
  }

  async onSubmit(formEvent: SubmitEvent): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.statusMessage.set(null);

    const formVal = this.contactForm.value;
    // Set to_email to match user_email in form state
    this.contactForm.patchValue({ to_email: formVal.user_email }, { emitEvent: false });

    try {
      if (!this.isConfigured) {
        await new Promise(resolve => setTimeout(resolve, 1200));
        this.isSuccess.set(true);
        this.statusMessage.set(`⚡ Demo Sandbox: Form validated & simulated via emailjs.${this.sendMethod()}!`);
      } else {
        if (this.sendMethod() === 'sendForm') {
          const formElement = formEvent.target as HTMLFormElement;
          await this.emailService.sendForm(formElement);
          this.statusMessage.set('🎉 Sent successfully using emailjs.sendForm() utility!');
        } else {
          await this.emailService.sendEmail({
            name: formVal.user_name,
            email: formVal.user_email,
            subject: formVal.subject,
            message: formVal.message
          });
          this.statusMessage.set('🎉 Sent successfully using emailjs.send() utility!');
        }
        this.isSuccess.set(true);
      }
      this.contactForm.reset({
        subject: 'Talk Inquiry: Angular Best Practices'
      });
    } catch (err: any) {
      this.isSuccess.set(false);
      this.statusMessage.set(`❌ Failed to send email: ${err?.text || err?.message || 'Unknown error'}`);
    } finally {
      this.isLoading.set(false);
    }
  }
}
