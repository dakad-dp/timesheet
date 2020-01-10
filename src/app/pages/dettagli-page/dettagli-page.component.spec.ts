import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPageComponent } from './dettagli-page.component';

describe('DettagliPageComponent', () => {
  let component: DettagliPageComponent;
  let fixture: ComponentFixture<DettagliPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
