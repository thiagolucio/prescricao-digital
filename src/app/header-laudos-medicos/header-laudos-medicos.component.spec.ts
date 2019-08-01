import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLaudosMedicosComponent } from './header-laudos-medicos.component';

describe('HeaderLaudosMedicosComponent', () => {
  let component: HeaderLaudosMedicosComponent;
  let fixture: ComponentFixture<HeaderLaudosMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLaudosMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLaudosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
