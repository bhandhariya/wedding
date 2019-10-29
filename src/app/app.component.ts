import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstapp';
  constructor(private http:HttpClient){}

  get(){
    this.http.get('http://localhost:3000/ping').subscribe(this.cb)
  }
  cb=(dt)=>{
    console.log(dt)
  }
}
