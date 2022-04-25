import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { PurchasePageComponent } from './components/purchase-page/purchase-page.component';
import { SucessPageComponent } from './components/sucess-page/sucess-page.component';
import { TransferPageComponent } from './components/transfer-page/transfer-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'book_info',
    component: BookComponent
  },
  {
    path: 'purchase_book',
    component: PurchasePageComponent
  },
  {
    path: 'transfer_book',
    component: TransferPageComponent
  },
  {
    path: 'success_page',
    component: SucessPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
