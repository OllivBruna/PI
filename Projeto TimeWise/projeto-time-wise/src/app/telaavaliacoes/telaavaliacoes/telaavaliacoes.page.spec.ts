import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaavaliacoesPage } from './telaavaliacoes.page';

describe('TelaavaliacoesPage', () => {
  let component: TelaavaliacoesPage;
  let fixture: ComponentFixture<TelaavaliacoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaavaliacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
