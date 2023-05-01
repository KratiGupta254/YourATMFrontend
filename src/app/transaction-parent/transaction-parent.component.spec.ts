import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionParentComponent } from './transaction-parent.component';

describe('TransactionParentComponent', () => {
  let component: TransactionParentComponent;
  let fixture: ComponentFixture<TransactionParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
