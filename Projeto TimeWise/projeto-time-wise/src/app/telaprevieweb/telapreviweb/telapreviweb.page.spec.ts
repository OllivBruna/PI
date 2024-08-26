import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelapreviwebPage } from './telapreviweb.page';

describe('TelapreviwebPage', () => {
  let component: TelapreviwebPage;
  let fixture: ComponentFixture<TelapreviwebPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelapreviwebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
