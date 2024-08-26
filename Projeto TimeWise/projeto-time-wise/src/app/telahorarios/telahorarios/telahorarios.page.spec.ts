import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelahorariosPage } from './telahorarios.page';

describe('TelahorariosPage', () => {
  let component: TelahorariosPage;
  let fixture: ComponentFixture<TelahorariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelahorariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
