import { ItemsService } from './../items.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  loadedSide = 'all';
  subscription;


  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemsService) { }

  ngOnInit() {
    // this.itemService.fetchCharacters();
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.itemService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    )

    this.subscription = this.itemService.charactersChanged.subscribe(
      () => {
        this.characters = this.itemService.getCharacters(this.loadedSide);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
