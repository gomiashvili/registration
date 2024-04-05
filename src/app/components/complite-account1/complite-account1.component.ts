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

  countries_icon = [
    { id: 0, name: '+995', src: 'https://flagicons.lipis.dev/flags/4x3/ge.svg' },
    { id: 1, name: '+254', src: 'https://flagicons.lipis.dev/flags/4x3/es.svg' },
    { id: 2, name: '+123', src: 'https://flagicons.lipis.dev/flags/4x3/jp.svg' },
    { id: 3, name: '+453', src: 'https://flagicons.lipis.dev/flags/4x3/de.svg' },
  ];
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
      country_id: [this.loggerService.registerData.compliteForm1.country_id, [Validators.required]]
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
  get country() {
    return this.compliteForm1.get('country');
  }
  saveContinue() {
    if (!this.compliteForm1.valid) return;
    if (this.compliteForm1.get('country')?.value == 0) return;
    this.loggerService.registerData.compliteForm1.address = this.compliteForm1.get('address')?.value;
    this.loggerService.registerData.compliteForm1.number = this.compliteForm1.get('number')?.value;

    this.loggerService.registerData.compliteForm1.country = this.compliteForm1.get('country')?.value;
    this.loggerService.registerData.compliteForm1.country_id = this.compliteForm1.get('country_id')?.value;
    let countryCode = this.countries_icon[this.compliteForm1.get('country_id')?.value]?.name;

    this.loggerService.registerData.compliteForm1.number = (countryCode + this.compliteForm1.get('number')?.value);



    // console.log(this.loggerService.registerData.compliteForm1);

    this.Router.navigateByUrl('/complite-account-step-3');


  }
}
