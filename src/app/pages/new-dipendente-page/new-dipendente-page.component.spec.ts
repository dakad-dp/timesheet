import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDipendentePageComponent } from './new-dipendente-page.component';

describe('NewDipendentePageComponent', () => {
  let component: NewDipendentePageComponent;
  let fixture: ComponentFixture<NewDipendentePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDipendentePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDipendentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
