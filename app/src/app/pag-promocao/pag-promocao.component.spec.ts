import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagPromocaoComponent } from './pag-promocao.component';

describe('PagPromocaoComponent', () => {
  let component: PagPromocaoComponent;
  let fixture: ComponentFixture<PagPromocaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagPromocaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPromocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
