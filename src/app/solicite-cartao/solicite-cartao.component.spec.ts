import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoliciteCartaoComponent } from './solicite-cartao.component';

describe('HomeComponent', () => {
  let component: SoliciteCartaoComponent;
  let fixture: ComponentFixture<SoliciteCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoliciteCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoliciteCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
