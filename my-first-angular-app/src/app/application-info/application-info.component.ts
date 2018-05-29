import { Component } from "@angular/core";

@Component({
  selector : 'app-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.css']
})
 export class ApplicationInfoComponent {
   info: String;

   constructor(){
     this.info='Mi primer componente';
   }
 }