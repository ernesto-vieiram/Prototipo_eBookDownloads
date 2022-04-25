import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/libros';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.scss']
})
export class PurchasePageComponent implements OnInit {
  libro? : Libro;
  constructor() { }

  ngOnInit(): void {
  }

}
