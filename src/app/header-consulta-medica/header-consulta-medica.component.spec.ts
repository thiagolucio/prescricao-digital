import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderConsultaMedicaComponent } from './header-consulta-medica.component';

describe('HeaderConsultaMedicaComponent', () => {
  let component: HeaderConsultaMedicaComponent;
  let fixture: ComponentFixture<HeaderConsultaMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderConsultaMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderConsultaMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
