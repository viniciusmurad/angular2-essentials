import {Routes} from '@angular/router'

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const ROUTES: Routes = [
  {path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', component: CreateCharacterComponent},
  {path: 'form-reactive', component: ReactiveFormsComponent},
  {path: '**', redirectTo: '/characters'}
]
