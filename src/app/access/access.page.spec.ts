import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessPage } from './access.page';

describe('AccessPage', () => {
  let component: AccessPage;
  let fixture: ComponentFixture<AccessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
