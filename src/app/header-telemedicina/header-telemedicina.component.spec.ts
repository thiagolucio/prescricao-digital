import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelemedicinaComponent } from './header-telemedicina.component';

describe('HeaderTelemedicinaComponent', () => {
  let component: HeaderTelemedicinaComponent;
  let fixture: ComponentFixture<HeaderTelemedicinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTelemedicinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTelemedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
