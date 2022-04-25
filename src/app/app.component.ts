import { Component } from '@angular/core';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { PurchasePageComponent } from './components/purchase-page/purchase-page.component';
import { SucessPageComponent } from './components/sucess-page/sucess-page.component';
import { TransferPageComponent } from './components/transfer-page/transfer-page.component';
import { Libro, libros } from './libros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prototipo';
  selected_book_ID = 0; //ID of book
  selected_book? : Libro;

  handleRouterActivation(component: any){
    if (component instanceof BookComponent){
      for (let i = 0; i < libros.length; i++){
        let libro_i = libros[i];
        if (libro_i.id == this.selected_book_ID){
          this.selected_book = libro_i;
        }
      }
      component.libro = this.selected_book;
    }

    if (component instanceof PurchasePageComponent){
      component.libro = this.selected_book;
    }

    if (component instanceof TransferPageComponent){
      component.libro = this.selected_book;
    }

    if (component instanceof SucessPageComponent){
      component.libro = this.selected_book;
    }

  }
}


