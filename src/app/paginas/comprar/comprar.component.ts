import { Component } from '@angular/core';

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [],
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.css'
})
export class ComprarComponent {
  preco: number = 45999;
  ano: number = 2022;
  modelo: string = 'HB20';
  completo: string = 'Completo';

}
