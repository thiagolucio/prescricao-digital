import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMedicamentosComponent } from './header-medicamentos.component';

describe('HeaderMedicamentosComponent', () => {
  let component: HeaderMedicamentosComponent;
  let fixture: ComponentFixture<HeaderMedicamentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMedicamentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
