import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-complite-account1',
  templateUrl: './complite-account1.component.html',
  styleUrls: ['./complite-account1.component.scss']
})
export class CompliteAccount1Component implements OnInit {
  compliteForm1: FormGroup;
  constructor(private fb: FormBuilder) {
    this.compliteForm1 = this.fb.group({
      number: ['', [Validators.required]],
      address: ['', [Validators.required]],
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
}
