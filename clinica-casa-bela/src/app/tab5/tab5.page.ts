import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
})
export class Tab5Page {

  recuperarForm: FormGroup;
  constructor() { 

    this.recuperarForm = new FormGroup({
    email: new FormControl('')
    });
  }
  onSubmit() {
    // Lógica para enviar o formulário de recuperação de senha
    const email = this.recuperarForm.value.email;
    console.log('Email enviado para:', email);
  }
}
