import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoProcessComponent } from './resultado-process.component';

describe('ResultadoProcessComponent', () => {
  let component: ResultadoProcessComponent;
  let fixture: ComponentFixture<ResultadoProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoProcessComponent]
    });
    fixture = TestBed.createComponent(ResultadoProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
