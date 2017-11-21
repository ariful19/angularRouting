import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaboutComponent } from './adminabout.component';

describe('AdminaboutComponent', () => {
  let component: AdminaboutComponent;
  let fixture: ComponentFixture<AdminaboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
