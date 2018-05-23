import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardBtnComponent } from './new-card-btn.component';

describe('NewCardBtnComponent', () => {
  let component: NewCardBtnComponent;
  let fixture: ComponentFixture<NewCardBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
