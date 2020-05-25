import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer MAravilla'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    this.personajes = event.detail.complete(this.personajes);
    event.detail.complete();
  }

  onClick() {
    console.log(this.personajes);
  }

}
