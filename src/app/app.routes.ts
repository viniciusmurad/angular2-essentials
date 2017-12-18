import {Routes} from '@angular/router'

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const ROUTES: Routes = [
  {path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', loadChildren: './create-character/create-character.module#CreateCharacterModule'},
  {path: 'form-reactive', component: ReactiveFormsComponent},
  {path: '**', redirectTo: '/characters'}
]
