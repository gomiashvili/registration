import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {
  hide: boolean = false;
  link: string = '/';
  registerForm: FormGroup
  constructor(private fb: FormBuilder, private logerService: LoggerService, private router: Router) {
    this.registerForm = this.fb.group(
      {
        name: [this.logerService.registerData.registerForm.name, [Validators.required, Validators.pattern('[A-Za-z\\s]*')]],
        email: [this.logerService.registerData.registerForm.email, [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
        password: [this.logerService.registerData.registerForm.password, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[@$!.:;,%*?&])[A-Za-z\d@$.,:;!%*?&]{6,}$/)]],
        agreed: [this.logerService.registerData.registerForm.agreed, Validators.requiredTrue]
      }
    )
  }

  ngOnInit(): void {
  }
  onRegisterFormSubmit() {
    if (!this.registerForm.valid) return;
    this.logerService.registerData.registerForm = this.registerForm.getRawValue();
    // console.log(this.logerService.registerData.registerForm);

    this.router.navigateByUrl('/complite-account-step-2');
  }
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
  showPassword() {
    this.hide = !this.hide;
  }
}
