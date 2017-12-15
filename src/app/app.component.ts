import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private itemService: ItemsService) { }

  ngOnInit() {
    this.itemService.fetchCharacters();
    // this.itemService.fetchCharactersX();
  }
}
