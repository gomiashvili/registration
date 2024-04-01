import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {
  registerForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
        password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!.:;,%*?&])[A-Za-z\d@$.,:;!%*?&]{6,}$/)]],
        agreed: [, Validators.requiredTrue]
      }
    )
  }

  ngOnInit(): void {
  }
  onRegisterFormSubmit() { }
  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get agree() {
    return this.registerForm.get('agreed');
  }
}
