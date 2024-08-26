import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelamenuPage } from './telamenu.page';

describe('TelamenuPage', () => {
  let component: TelamenuPage;
  let fixture: ComponentFixture<TelamenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelamenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
