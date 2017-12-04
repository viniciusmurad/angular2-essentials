import { ItemsService } from '../items.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() character;
  // @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

  onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: side});
    // this.itemService.itemSubject.next({name: this.character.name, side: side});
    this.itemsService.onSideChosen({name: this.character.name, side: side});
  }

}
