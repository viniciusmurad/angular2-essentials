import { ItemService } from '../item.service';
import { ItemsService } from '../items.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.itemService.itemSubject.subscribe((sub) => {
    //   this.onSideChosen(sub);
    // })
  }

}
