import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaudosMedicosComponent } from './laudos-medicos.component';

describe('LaudosMedicosComponent', () => {
  let component: LaudosMedicosComponent;
  let fixture: ComponentFixture<LaudosMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaudosMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaudosMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
