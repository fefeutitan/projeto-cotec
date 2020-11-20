import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';
import { MovimentacaoService } from '../../service/movimentacao.service';

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrls: ['./movimentacao-form.component.scss'],
})
export class MovimentacaoFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: MovimentacaoService,
    private modal: AlertModalService,
    private location: Location
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      tramitacao: [null, [Validators.required]],
      origem: [null, [Validators.required]],
      destino: [null, [Validators.required]],
      usuario: [null, [Validators.required]],
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
          this.modal.showAlertSuccess('Criado com sucesso!');
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
