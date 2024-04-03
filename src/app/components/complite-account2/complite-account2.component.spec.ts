import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteAccount2Component } from './complite-account2.component';

describe('CompliteAccount2Component', () => {
  let component: CompliteAccount2Component;
  let fixture: ComponentFixture<CompliteAccount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompliteAccount2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompliteAccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
