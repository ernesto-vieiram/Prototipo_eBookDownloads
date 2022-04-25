import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/libros';

@Component({
  selector: 'app-sucess-page',
  templateUrl: './sucess-page.component.html',
  styleUrls: ['./sucess-page.component.scss']
})
export class SucessPageComponent implements OnInit {

  libro?: Libro

  constructor() { }

  ngOnInit(): void {
  }

}
