import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-complite-account2',
  templateUrl: './complite-account2.component.html',
  styleUrls: ['./complite-account2.component.scss']
})
export class CompliteAccount2Component implements OnInit {
  link: string = '/complite-account-step-1';
  compliteForm2: FormGroup;
  constructor(private fb: FormBuilder, private loggerService: LoggerService, private router: Router) {
    this.compliteForm2 = this.fb.group({
      bvn: [loggerService.registerData.compliteForm2.bvn, [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern(/\d/)]],
    })
  }

  ngOnInit(): void {
  }
  get bvn() {
    return this.compliteForm2.get('bvn');
  }
  finish() {
    if (!this.compliteForm2.valid) return;
    this.loggerService.registerData.compliteForm2 = this.compliteForm2.getRawValue();


    this.router.navigateByUrl('/login');
  }
}
