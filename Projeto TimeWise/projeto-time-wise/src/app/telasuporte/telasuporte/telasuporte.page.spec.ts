import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelasuportePage } from './telasuporte.page';

describe('TelasuportePage', () => {
  let component: TelasuportePage;
  let fixture: ComponentFixture<TelasuportePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelasuportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
