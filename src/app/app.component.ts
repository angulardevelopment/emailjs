import { Component } from '@angular/core';
import{ init } from "emailjs-com";
import emailjs from "emailjs-com"
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emailjs';
  checkoutForm: FormGroup;
  constructor(){
//https://dashboard.emailjs.com/admin/integration
// emailjs.init(‘’);
    init("user_6stpaecdQ6yKRGmkwde2q"); // pass your userid here
  }
}
