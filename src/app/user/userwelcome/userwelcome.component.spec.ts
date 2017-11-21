import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwelcomeComponent } from './userwelcome.component';

describe('UserwelcomeComponent', () => {
  let component: UserwelcomeComponent;
  let fixture: ComponentFixture<UserwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
