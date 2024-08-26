import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelacadastrarfiscaPage } from './telacadastrarfisca.page';

describe('TelacadastrarfiscaPage', () => {
  let component: TelacadastrarfiscaPage;
  let fixture: ComponentFixture<TelacadastrarfiscaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelacadastrarfiscaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
