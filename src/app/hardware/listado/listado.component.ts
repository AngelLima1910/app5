import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    public hardware : any = [{id:1, nombre : "Computadora de escritorio", marca : "Mac", modelo : "MacBookPro", memoria : "8GB", procesador : "A12", discoDuro : "512GB"}, {id:2, nombre : "Laptop", marca : "Lenovo", modelo : "Ideapad15", memoria : "12GB", procesador : "Core i5", discoDuro : "512GB"}, {id:3, nombre : "Laptop", marca : "HP", modelo : "15-dy1005la", memoria : "12GB", procesador : "Core i5", discoDuro : "512GB"}, {id:4, nombre : "Computadora de escritorio", marca : "Lenovo", modelo : "IdeaPad15-la", memoria : "16GB", procesador : "Ryzen 5", discoDuro : "1TB"}, {id:5, nombre : "Laptop", marca : "Huawei", modelo : "15 Pro", memoria : "8GB", procesador : "Core i7", discoDuro : "512GB"}, {id:6, nombre : "Laptop", marca : "Predator", modelo : "PredatorPro", memoria : "16GB", procesador : "Ryzen 7", discoDuro : "256GB"}, {id:7, nombre : "Laptop", marca : "VIVO", modelo : "VIVO15tx", memoria : "12GB", procesador : "Core i3", discoDuro : "256GB"}, {id:8, nombre : "Laptop", marca : "HP", modelo : "14-dx1004la", memoria : "8GB", procesador : "Core i5", discoDuro : "512GB"}];
}
