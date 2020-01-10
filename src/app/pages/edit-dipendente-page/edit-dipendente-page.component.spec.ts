import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDipendentePageComponent } from './edit-dipendente-page.component';

describe('EditDipendentePageComponent', () => {
  let component: EditDipendentePageComponent;
  let fixture: ComponentFixture<EditDipendentePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDipendentePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDipendentePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
