import { ItemsService } from '../items.service';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  characterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private itemService: ItemsService) { }

  ngOnInit() {
    this.characterForm = this.formBuilder.group({
      'name': ['', Validators.required]
    })
  }

  save() {
    this.itemService.addCharacter(this.characterForm.value.name, '');
  }

}
