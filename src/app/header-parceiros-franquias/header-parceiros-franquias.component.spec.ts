import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderParceirosFranquiasComponent } from './header-parceiros-franquias.component';

describe('HeaderParceirosFranquiasComponent', () => {
  let component: HeaderParceirosFranquiasComponent;
  let fixture: ComponentFixture<HeaderParceirosFranquiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderParceirosFranquiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderParceirosFranquiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
