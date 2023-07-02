import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  cadastroForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm && this.cadastroForm.valid){
      // Lógica para enviar os dados de cadastro
      const nome = this.cadastroForm.value.nome;
      const email = this.cadastroForm.value.email;
      const senha = this.cadastroForm.value.senha;
      const confirmarSenha = this.cadastroForm.value.confirmarSenha;

      console.log('Dados de cadastro:', nome, email, senha, confirmarSenha);
    } else {
      console.log('Formulário inválido. Verifique os campos obrigatórios.');
    }
  }  

}
