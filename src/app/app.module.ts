import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './sidebar-component/sidebar-component.component';
import { MainComponent } from './main/main.component';
import { SidebarItemsComponent } from './sidebar-items/sidebar-items.component';
import { MainItemsComponent } from './main-items/main-items.component';
import { MainTitleCardComponent } from './main-title-card/main-title-card.component';
import { MainCardComponent } from './main-card/main-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    MainComponent,
    SidebarItemsComponent,
    MainItemsComponent,
    MainTitleCardComponent,
    MainCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
