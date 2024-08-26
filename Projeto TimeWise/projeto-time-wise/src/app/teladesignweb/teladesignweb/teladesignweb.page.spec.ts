import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeladesignwebPage } from './teladesignweb.page';

describe('TeladesignwebPage', () => {
  let component: TeladesignwebPage;
  let fixture: ComponentFixture<TeladesignwebPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeladesignwebPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
