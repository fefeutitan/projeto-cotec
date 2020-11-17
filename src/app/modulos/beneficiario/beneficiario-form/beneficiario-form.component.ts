import { BeneficiarioService } from './../../beneficiario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-beneficiario-form',
  templateUrl: './beneficiario-form.component.html',
  styleUrls: ['./beneficiario-form.component.scss']
})
export class BeneficiarioFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: BeneficiarioService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nome: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      cpf: [null,[Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      orgao: [null,[Validators.required]],
      matricula: [null,[Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
    });
  }

  // tslint:disable-next-line: typedef
  hasError(field: string) {

    return this.form.get(field).errors;

  }

  // tslint:disable-next-line: typedef
  onSubmit() {

    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.error(error),
        () => console.log('request completo')
      );
    }

  }

  // tslint:disable-next-line: typedef
  onCancel() {

    this.submitted = false;
    this.form.reset();

  }

}
