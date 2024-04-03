import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  registerData = {

    registerForm: {
      name: null,
      email: null,
      password: null,
      agreed: false

    },
    compliteForm1: {
      number: '',
      address: null,
      country: null,
      country_id: 0

    }
    ,
    compliteForm2: {
      bvn: null
    }
  }
  constructor() { }

}
