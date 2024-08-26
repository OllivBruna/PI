import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelacontaPage } from './telaconta.page';

describe('TelacontaPage', () => {
  let component: TelacontaPage;
  let fixture: ComponentFixture<TelacontaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelacontaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
