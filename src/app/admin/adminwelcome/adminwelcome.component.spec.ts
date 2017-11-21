import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwelcomeComponent } from './adminwelcome.component';

describe('AdminwelcomeComponent', () => {
  let component: AdminwelcomeComponent;
  let fixture: ComponentFixture<AdminwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
