import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export interface Elemento {
  value: string;
  active: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  resultsGroup = new FormGroup({
    elementoControl: new FormControl(''),
  });
  listado: Elemento[] = [];

  get elemento() {
    return this.resultsGroup.controls.elementoControl;
  }

  constructor() {}

  ngOnInit() {}

  addElemento(value: any) {
    let newElement: Elemento = {
      value: this.elemento.value,
      active: true,
    };
    this.listado.push(newElement);
    this.elemento.reset();
  }

  deleteElemento(position: any) {
    this.listado.splice(position, 1);
  }

  activeElemento(item: Elemento) {
    item.active = !item.active;
  }
}
