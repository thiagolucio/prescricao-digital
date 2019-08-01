import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaAcionistasComponent } from './area-acionistas.component';

describe('AreaAcionistasComponent', () => {
  let component: AreaAcionistasComponent;
  let fixture: ComponentFixture<AreaAcionistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaAcionistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaAcionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
