import { Component, OnInit, Input } from '@angular/core';
import {Libro, libros} from '../../libros';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  libro?: Libro;

  constructor() {
  }

  ngOnInit(): void {
    //GET BOOK INFO

  }

}
