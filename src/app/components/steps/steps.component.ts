import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
  @Input() link!: string;

  @Input() step: number | any = 1;

  stepTree: any | [] =
    {
      0: '/',
      1: '/register-account-step-1',
      2: '/complite-account-step-2',
      3: '/complite-account-step-3',
    }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigateByUrl(this.stepTree[this.step - 1]);
  }
}
