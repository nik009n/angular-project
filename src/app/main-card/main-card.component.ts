import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  datas: any = [];
  ngOnInit(): void {
    this.httpClient.get("assets/api-data.json").subscribe(data =>{
      console.log(data);
      this.datas = data;
    })
  }

}
