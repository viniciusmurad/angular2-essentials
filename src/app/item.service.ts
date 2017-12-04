import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ItemService {

  itemSubject = new Subject();

  constructor() { }
}
