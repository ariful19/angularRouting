import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraboutComponent } from './userabout.component';

describe('UseraboutComponent', () => {
  let component: UseraboutComponent;
  let fixture: ComponentFixture<UseraboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseraboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseraboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
