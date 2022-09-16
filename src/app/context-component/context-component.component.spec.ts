import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextComponentComponent } from './context-component.component';

describe('ContextComponentComponent', () => {
  let component: ContextComponentComponent;
  let fixture: ComponentFixture<ContextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
