import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelapersonalizacaoPage } from './telapersonalizacao.page';

describe('TelapersonalizacaoPage', () => {
  let component: TelapersonalizacaoPage;
  let fixture: ComponentFixture<TelapersonalizacaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelapersonalizacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
