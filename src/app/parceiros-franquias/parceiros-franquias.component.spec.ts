import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParceirosFranquiasComponent } from './parceiros-franquias.component';

describe('ParceirosFranquiasComponent', () => {
  let component: ParceirosFranquiasComponent;
  let fixture: ComponentFixture<ParceirosFranquiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParceirosFranquiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParceirosFranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
