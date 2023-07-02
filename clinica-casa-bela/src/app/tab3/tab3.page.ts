import { Component } from '@angular/core';
import { Agenda, Profissional } from './tab3.module';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  selectedTime: any;
  profissionais: Profissional[] =[
    {nome: 'Dr(a). Omena', checked: false},
    {nome: 'Dr(a). Rebeka', checked: false},
    {nome: 'Dr(a). Carlos', checked: false},
    {nome: 'Dr(a). Gabriel', checked: false},
    {nome: 'Dr(a). Augusto', checked: false},
    {nome: 'Dr(a). Arlete', checked: false},
  ];
  selectedProfissionais: Profissional[] = [];
  agendas: Agenda[];
  selectedAgenda!: Agenda;

  constructor() {

  this.agendas = [
      { nome: 'Agenda 1' },
      { nome: 'Agenda 2' },
      { nome: 'Agenda 3' },
    ]
  
  }

onTimeSelected(event: any) {
    this.selectedTime = event.detail.value;
    // Realize a lógica para selecionar os profissionais com base no horário selecionado
    // e atribua os resultados a uma variável que será usada na exibição dos profissionais.

    }
    
onProfissionalSelected(event: any, profissionais: Profissional) {
    profissionais.checked = event.detail.checked;
    }
selectedprofissionais(event: any, index: number) {
      this.profissionais[index].checked = event.detail.checked;
      }

agendar() {
  const profissionalSelecionado = this.profissionais.some(profissional => profissional.checked === true);
  
  if (profissionalSelecionado) {
    // Lógica para agendar a consulta com o profissional selecionado
    console.log('Consulta agendada com sucesso!');
  } else {
    console.log('Nenhum profissional selecionado. Selecione pelo menos um profissional para agendar a consulta.');
  }
    
  }
}
