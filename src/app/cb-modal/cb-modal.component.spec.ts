import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbModalComponent } from './cb-modal.component';

describe('CbModalComponent', () => {
  let component: CbModalComponent;
  let fixture: ComponentFixture<CbModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
