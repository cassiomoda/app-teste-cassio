import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaProcessarComponent } from './pessoa-processar.component';

describe('PessoaProcessarComponent', () => {
  let component: PessoaProcessarComponent;
  let fixture: ComponentFixture<PessoaProcessarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaProcessarComponent]
    });
    fixture = TestBed.createComponent(PessoaProcessarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
