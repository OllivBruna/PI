import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelavisualizarlinkPage } from './telavisualizarlink.page';

describe('TelavisualizarlinkPage', () => {
  let component: TelavisualizarlinkPage;
  let fixture: ComponentFixture<TelavisualizarlinkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelavisualizarlinkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
