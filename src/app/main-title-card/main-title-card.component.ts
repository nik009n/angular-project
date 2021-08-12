import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-main-title-card',
  templateUrl: './main-title-card.component.html',
  styleUrls: ['./main-title-card.component.css']
})
export class MainTitleCardComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  datas: any = [];
  ngOnInit(): void {
    this.httpClient.get("assets/api-data.json").subscribe(data =>{
      console.log(data);
      this.datas = data;
    })
  }

}
