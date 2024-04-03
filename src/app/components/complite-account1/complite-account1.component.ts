import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-complite-account1',
  templateUrl: './complite-account1.component.html',
  styleUrls: ['./complite-account1.component.scss']
})
export class CompliteAccount1Component implements OnInit {
  compliteForm1: FormGroup;

  countries = [
    { id: 0, name: 'Please Select' },
    { id: 1, name: 'Georgia' },
    { id: 2, name: 'Spain' },
    { id: 3, name: 'Japan' },
    { id: 4, name: 'Germany' },
  ];

  constructor(private fb: FormBuilder, private loggerService: LoggerService, private Router: Router) {
    this.compliteForm1 = this.fb.group({
      number: [this.loggerService.registerData.compliteForm1.number, [Validators.required]],
      address: [this.loggerService.registerData.compliteForm1.address, [Validators.required]],
      country: [this.loggerService.registerData.compliteForm1.country, [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  get number() {
    return this.compliteForm1.get('number');
  }
  get address() {
    return this.compliteForm1.get('address');
  }
  saveContinue() {
    if (!this.compliteForm1.valid) return;
    if (this.compliteForm1.get('country')?.value == 0) return;
    this.loggerService.registerData.compliteForm1 = this.compliteForm1.getRawValue();
    console.log(this.loggerService.registerData.compliteForm2);

    this.Router.navigateByUrl('/complite-account-step-3');


  }
}
