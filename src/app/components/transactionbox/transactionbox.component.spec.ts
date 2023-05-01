import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionboxComponent } from './transactionbox.component';

describe('TransactionboxComponent', () => {
  let component: TransactionboxComponent;
  let fixture: ComponentFixture<TransactionboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
