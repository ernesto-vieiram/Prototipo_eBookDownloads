import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {Libro, libros} from '../../libros'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  libros = libros;
  libro_seleccionado_emit? :Libro;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickImage(value: Libro){
    this.libro_seleccionado_emit = value
    this.router.navigate(['/', 'book_info'])
  }

}
