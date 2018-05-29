import { NgModule, APP_BOOTSTRAP_LISTENER } from "@angular/core";
import { AppComponent } from "./app.component";
import { ApplicationInfoComponent } from "./application-info/application-info.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginModule } from "./login/login.module";





@NgModule({
declarations: [
  AppComponent,
  ApplicationInfoComponent
],

imports:[
  BrowserModule,
  LoginModule
],
providers: [],
exports:[],
bootstrap:[AppComponent]
})

export class AppModule {

}