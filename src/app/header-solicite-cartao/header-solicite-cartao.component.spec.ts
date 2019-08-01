import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSoliciteCartaoComponent } from './header-solicite-cartao.component';

describe('HeaderHomeComponent', () => {
  let component: HeaderSoliciteCartaoComponent;
  let fixture: ComponentFixture<HeaderSoliciteCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSoliciteCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSoliciteCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
