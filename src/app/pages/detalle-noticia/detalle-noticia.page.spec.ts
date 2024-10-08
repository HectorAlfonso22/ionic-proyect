import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleNoticiaPage } from './detalle-noticia.page';

describe('DetalleNoticiaPage', () => {
  let component: DetalleNoticiaPage;
  let fixture: ComponentFixture<DetalleNoticiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
