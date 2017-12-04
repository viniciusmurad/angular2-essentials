import { ItemService } from '../item.service';
import { ItemsService } from '../items.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [];

  chosenList = 'all';

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    // this.itemService.itemSubject.subscribe((sub) => {
    //   this.onSideChosen(sub);
    // })
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {

    this.characters = this.itemsService.getCharacters(this.chosenList);
    return this.characters;

  }



}
