import { Component, OnInit } from '@angular/core';
import { faHome,faUser,faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar-items',
  templateUrl: './sidebar-items.component.html',
  styleUrls: ['./sidebar-items.component.css']
})
export class SidebarItemsComponent implements OnInit {
  faHome = faHome;
  faUser = faUser;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
