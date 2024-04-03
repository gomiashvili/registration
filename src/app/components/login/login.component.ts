import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private LoggerService: LoggerService, private fb: FormBuilder) {
    this.loginFormGroup = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    })

  }

  ngOnInit(): void {
    console.log(this.LoggerService.registerData);
  }
  login() {
    if (!this.loginFormGroup.valid) return;
    console.log(this.loginFormGroup.getRawValue());

  }
}
