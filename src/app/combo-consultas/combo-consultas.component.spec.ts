import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboConsultasComponent } from './combo-consultas.component';

describe('ComboConsultasComponent', () => {
  let component: ComboConsultasComponent;
  let fixture: ComponentFixture<ComboConsultasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboConsultasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
