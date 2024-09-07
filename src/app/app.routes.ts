import { Routes } from '@angular/router';
import { HomeComponent } from './componentesNav/home/home.component';
import { ComprarComponent } from './paginas/comprar/comprar.component';
import { VenderComponent } from './paginas/vender/vender.component';
import { ContatosComponent } from './paginas/contatos/contatos.component';

export const routes: Routes = [
    { path: '' , component : HomeComponent } ,
    { path: 'comprar' , component : ComprarComponent} ,
    { path: 'vender' , component : VenderComponent} ,
    { path: 'contatos' , component: ContatosComponent } ,
    { path: '' , redirectTo: '/home' , pathMatch: 'full'}
];
