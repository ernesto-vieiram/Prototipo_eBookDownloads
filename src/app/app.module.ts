import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BuscadorComponent } from './components/buscador/buscador.component';
import { BookComponent } from './components/book/book.component';
import { HomeComponent } from './components/home/home.component';
import { PurchasePageComponent } from './components/purchase-page/purchase-page.component';
import { TransferPageComponent } from './components/transfer-page/transfer-page.component';
import { ConnectTransferComponent } from './components/connect-transfer/connect-transfer.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, NgForm } from '@angular/forms';
import { SucessPageComponent } from './components/sucess-page/sucess-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    BookComponent,
    PurchasePageComponent,
    TransferPageComponent,
    ConnectTransferComponent,
    SucessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
