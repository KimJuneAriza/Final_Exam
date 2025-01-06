import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-second-route',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './second-route.component.html',
  styleUrl: './second-route.component.css'
})
export class SecondRouteComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.strongPasswordValidator]]
    });
  }

  get name(){
    return this.registrationForm.get('name')
  }
  get email(){
    return this.registrationForm.get('email')
  }
  get lastname(){
    return this.registrationForm.get('lastName')
  }
  get mobile(){
    return this.registrationForm.get('mobile')
  }
  get username(){
    return this.registrationForm.get('username')
  }
  get password(){
    return this.registrationForm.get('password')
  }

  ngOnInit(): void {}

  strongPasswordValidator(control: any) {
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const valid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && password.length >= 8;

    return valid ? null : { strongPassword: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted!', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
