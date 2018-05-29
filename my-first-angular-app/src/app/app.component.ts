import { Component, SimpleChanges, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy, OnChanges {
 
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  title = 'app';



}
