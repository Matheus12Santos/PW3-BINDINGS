import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InterpolationComponent, PropertyBindingComponent, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello World!!';
  // foto = 'favicon.ico';
  // exibeTexto:boolean = false;
  // soma(n1: number, n2: number) {
  //   return n1 + n2;
  // }
  // alertar(){
  //   alert("Hoje está muito quente, beba água!");
  //   // Troca de True para False e vise-versa
  //   this.exibeTexto = !this.exibeTexto
  // }
}
