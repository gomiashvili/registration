import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteAccount1Component } from './complite-account1.component';

describe('CompliteAccount1Component', () => {
  let component: CompliteAccount1Component;
  let fixture: ComponentFixture<CompliteAccount1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompliteAccount1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompliteAccount1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
