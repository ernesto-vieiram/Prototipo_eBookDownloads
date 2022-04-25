import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Libro } from 'src/app/libros';


@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.scss']
})
export class TransferPageComponent implements OnInit {

  libro?: Libro;
  
  init_progress_value = 33.0;
  connection_progress = 0.0;
  transfer_progress = 0.0;

  total_progress = this.init_progress_value

  constructor() { }

  ngOnInit(): void {
  }

  handleConnectionProgress(connection_progress: number){
    this.connection_progress = connection_progress;
    this.total_progress = this.init_progress_value + this.connection_progress/3.0 + this.transfer_progress/3.0

    console.log("TOTAL: " + this.total_progress + " CONNECT: " + this.connection_progress)
  }

  handleTransferProgress(transfer_progress: number){
    this.transfer_progress = transfer_progress;
    this.total_progress = this.init_progress_value + this.connection_progress/3.0 + this.transfer_progress/3.0

    console.log("TOTAL: " + this.total_progress + " TRANSFER: " + this.transfer_progress)
  }

}
