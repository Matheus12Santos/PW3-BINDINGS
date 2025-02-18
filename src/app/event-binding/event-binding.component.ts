import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  exibeTexto:boolean = false;
  alertar(){
    alert("Hoje está muito quente, beba água!");
    // Troca de True para False e vise-versa
    this.exibeTexto = !this.exibeTexto
  }
}
