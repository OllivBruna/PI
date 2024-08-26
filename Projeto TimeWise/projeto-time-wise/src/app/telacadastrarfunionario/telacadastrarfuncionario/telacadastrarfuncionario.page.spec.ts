import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelacadastrarfuncionarioPage } from './telacadastrarfuncionario.page';

describe('TelacadastrarfuncionarioPage', () => {
  let component: TelacadastrarfuncionarioPage;
  let fixture: ComponentFixture<TelacadastrarfuncionarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelacadastrarfuncionarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
