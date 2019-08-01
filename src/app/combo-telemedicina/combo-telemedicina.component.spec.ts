import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboTelemedicinaComponent } from './combo-telemedicina.component';

describe('ComboTelemedicinaComponent', () => {
  let component: ComboTelemedicinaComponent;
  let fixture: ComponentFixture<ComboTelemedicinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboTelemedicinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboTelemedicinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
