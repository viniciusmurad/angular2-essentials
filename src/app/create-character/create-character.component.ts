import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../items.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'}
  ]

  obj: any = {
    name: null,
    side: null
  }

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    console.log(this.obj.name);
    this.itemsService.addCharacter(form.value.name, form.value.side);
  }

}
