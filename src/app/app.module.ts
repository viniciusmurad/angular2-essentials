import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';
import { ItemsService } from './items.service';
import { LogService } from './log.service';
import { HttpService } from './http.service';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    ReactiveFormsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [ItemService, ItemsService, LogService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
