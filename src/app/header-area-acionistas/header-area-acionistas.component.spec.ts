import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAreaAcionistasComponent } from './header-area-acionistas.component';

describe('HeaderAreaAcionistasComponent', () => {
  let component: HeaderAreaAcionistasComponent;
  let fixture: ComponentFixture<HeaderAreaAcionistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAreaAcionistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAreaAcionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
