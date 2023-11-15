import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonaComponent } from './editar-persona.component';

describe('EditarPersonaComponent', () => {
  let component: EditarPersonaComponent;
  let fixture: ComponentFixture<EditarPersonaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPersonaComponent]
    });
    fixture = TestBed.createComponent(EditarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
