import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../environments/environment';

export interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor() {
    if (environment.emailjs.publicKey && environment.emailjs.publicKey !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(environment.emailjs.publicKey);
    }
  }

  async sendEmail(params: EmailParams): Promise<EmailJSResponseStatus> {
    console.log(params, this,'hbj')
    try {
      const response = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        {
          from_name: params.name,
          to_email: params.email,  // Standard EmailJS variable for recipient address
          user_email: params.email, // Standard fallback variable for recipient address
          reply_to: params.email,
          subject: params.subject,
          message: params.message,
          to_name: params.name || 'Demo Admin'
        },
        environment.emailjs.publicKey
      );
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  }

  async sendForm(formElement: HTMLFormElement): Promise<EmailJSResponseStatus> {
    try {
      const response = await emailjs.sendForm(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        formElement,
        environment.emailjs.publicKey
      );
      return response;
    } catch (error) {
      console.error('EmailJS Form Error:', error);
      throw error;
    }
  }
}
