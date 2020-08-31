import { Component, OnInit, Input } from '@angular/core';
//Agregar las siguientes modulos
import {BrowserModule, disableDebugTools}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
@Component({
selector: 'app-combo-box',
templateUrl: './combo-box.component.html',
styleUrls: ['./combo-box.component.css']
})
export class ComboBoxComponent implements OnInit {
//crear las siguientes variables
leche;
azucar;
cafe;
frijoles;
cereal;
unidades;

nombre:string;

opcionSeleccionado: string ;
opclech:string;
opcazu:string;
opccaf:string;
opcfri:string;
opccer:string;
vallec:number;
valazu:number;
valcaf:number;
valfri:number;
valcer:number;

totallec:number;
totalazu:number;
totalcaf:number;
totalfri:number;
totalcer:number;
total:number;
contador:number;

dui:string;
pr:number;
valorconversion:number;
constructor() {}
ngOnInit() {
//inicializar las variables
this.leche = ["Si","No"];
this.azucar = ["Si","No"];
this.cafe = ["Si","No"];
this.frijoles = ["Si","No"];
this.cereal = ["Si","No"];

this.opcionSeleccionado="Selecciona";
this.opclech="Selecciona";
this.opcazu="Selecciona";
this.opccaf="Selecciona";
this.opcfri="Selecciona";
this.opccer="Selecciona";

this.vallec=0;
this.valazu=0;
this.valcaf=0;
this.valfri=0;
this.valcer=0;

this.totallec=0;
this.totalazu=0;
this.totalcaf=0;
this.totalfri=0;
this.totalfri=0;

this.total=0;
this.pr=0;
this.contador=0;

}

//funcion que realiza los calculos
capturar() {
   
switch(this.opclech){
case'Si':
this.totallec=this.vallec* 2;
case 'No':
    this.totallec=0;
break;
}
switch(this.opcazu){
    case'Si':
    this.totalazu=this.valazu* 1.5;
    case 'No':
        this.totalazu=0;
    break;
}
switch(this.opccaf){
    case'Si':
    this.totalcaf=this.valcaf* 1.6;
    case 'No':
        this.totalcaf=0;
    break;
}
switch(this.opcfri){
    case'Si':
    this.totalfri=this.valfri* 1;
    case 'No':
        this.totalfri=0;
    break;
}
switch(this.opccer){
    case'Si':
    this.totalcer=this.valcer* 1.30;
    case 'No':
        this.totalcer=0;
    break;
}
this.total=this.totallec+this.totalazu+this.totalcaf+this.totalfri+this.totalcer;
console.log(this.totallec);

}  
ingresar(){
    this.contador++;
    this.total=this.totallec+this.totalazu+this.totalcaf+this.totalfri+this.totalcer;
    console.log(this.totallec);
    
}

}
export class AppComponent {
}