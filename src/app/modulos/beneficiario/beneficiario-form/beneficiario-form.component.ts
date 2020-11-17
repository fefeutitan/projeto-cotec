import { AlertModalService } from './../../../shared/alert-modal.service';
import { BeneficiarioService } from './../../beneficiario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beneficiario-form',
  templateUrl: './beneficiario-form.component.html',
  styleUrls: ['./beneficiario-form.component.scss'],
})
export class BeneficiarioFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: BeneficiarioService,
    private modal: AlertModalService,
    private location: Location
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      cpf: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
      ],
      orgao: [null, [Validators.required]],
      matricula: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        (success) => {
          this.modal.showAlertSuccess('Crido com sucesso!');
          this.location.back();
        },
        (error) => this.modal.showAlertDanger('Erro Ao criar beneficiário!'),
        () => console.log('request completo')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
