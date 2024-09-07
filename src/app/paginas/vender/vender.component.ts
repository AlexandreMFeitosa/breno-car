import { Component } from '@angular/core';
import { FooterComponent } from "../../componentesNav/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';


@Component({
  selector: 'app-vender',
  standalone: true,
  imports: [FooterComponent, FormsModule,NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './vender.component.html',
  styleUrl: './vender.component.css'
})
export class VenderComponent {
  telefone : string = '';
  valorPretendido : string = '';
}
