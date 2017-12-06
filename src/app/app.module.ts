import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './item.service';
import { ItemsService } from './items.service';
import { LogService } from './log.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { HeaderComponent } from './header/header.component';

const routes = [
  {path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters'}
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    ReactiveFormsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItemService, ItemsService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
