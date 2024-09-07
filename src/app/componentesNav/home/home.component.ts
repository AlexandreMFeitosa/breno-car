import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  preco: number = 40.999
  ano: number = 2022
  modelo: string = 'HB20'
  completo: string = 'Completo'


}
