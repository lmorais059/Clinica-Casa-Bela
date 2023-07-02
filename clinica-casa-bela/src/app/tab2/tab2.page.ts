import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

login() {
  // Lógica para autenticação e validação do formulário de login


  // Redirecionar para a página da tab1
  this.router.navigate(['/tabs/tab1']);

  }
}



