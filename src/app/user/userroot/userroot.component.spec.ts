import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrootComponent } from './userroot.component';

describe('UserrootComponent', () => {
  let component: UserrootComponent;
  let fixture: ComponentFixture<UserrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
