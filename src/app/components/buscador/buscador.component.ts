import {Component, OnInit,  EventEmitter, Output} from '@angular/core';
import { Libro, libros } from 'src/app/libros';


@Component({
  selector: 'buscador',
  templateUrl: 'buscador.component.html',
  styleUrls: ['buscador.component.scss'],
})
export class BuscadorComponent implements OnInit {
  libros = libros
  @Output() libro_seleccionado_emit: EventEmitter<Libro> = new EventEmitter<Libro>();

  public set libro_seleccionado(value: Libro){
    this.libro_seleccionado_emit.emit(value)
  }

  constructor(){
  }

  ngOnInit() {
    console.log(this.libros)
  }
}