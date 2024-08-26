import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaagendaPage } from './telaagenda.page';

describe('TelaagendaPage', () => {
  let component: TelaagendaPage;
  let fixture: ComponentFixture<TelaagendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaagendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
