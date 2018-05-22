import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSiteHeaderComponent } from './app-site-header.component';

describe('AppSiteHeaderComponent', () => {
  let component: AppSiteHeaderComponent;
  let fixture: ComponentFixture<AppSiteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSiteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
