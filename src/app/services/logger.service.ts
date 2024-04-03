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
      number: null,
      address: null
    }
    ,
    compliteForm2: {
      bvn: null
    }
  }
  constructor() { }

}
