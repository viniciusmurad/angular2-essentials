import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  characterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.characterForm = this.formBuilder.group({
      'name': ['', Validators.required]
    })
  }

  save() {
    if (this.characterForm.dirty && this.characterForm.valid) {
      alert(`Name: ${this.characterForm.value.name}`);
    }
  }

}
