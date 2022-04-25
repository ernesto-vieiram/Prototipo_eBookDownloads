import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect-transfer',
  templateUrl: './connect-transfer.component.html',
  styleUrls: ['./connect-transfer.component.scss']
})
export class ConnectTransferComponent implements OnInit {
  @Output() connectionProgress: EventEmitter<number> = new EventEmitter<number>()
  @Output() transferProgress: EventEmitter<number> = new EventEmitter<number>()

  connection_progress: number = 0.0;
  transfer_progress: number = 0.0;

  image_to_show = "/assets/kindle_image.png"
  text_to_show = ""

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    this.simulate_connection()

  }

  async simulate_connection(){
    await this.connect()
    await this.wait_for_transfer()
    await this.transfer()
    this.router.navigate(['/success_page'])
  }

  async connect(){
    this.image_to_show = "/assets/kindle_image.png"
    this.text_to_show = "Por favor, conecte su dispotivo al ordenador."
    await new Promise(f => setTimeout(f, 1000));
    this.text_to_show = "Conectado, por favor espere..."
    while (this.connection_progress < 100){
      this.connection_progress = this.connection_progress + Math.random()*10+5
      this.connectionProgress.emit(this.connection_progress)
      await new Promise(f => setTimeout(f, 1000));
    }
  }

  async wait_for_transfer(){
    await new Promise(f => setTimeout(f, 3000));
  }

  async transfer(){
    this.text_to_show = "Estamos transfiriendo su nuevo libro a su lector. ¡No lo desconecte!"
    while (this.transfer_progress < 100){
        this.transfer_progress = this.transfer_progress + Math.random()*10+5
        this.transferProgress.emit(this.transfer_progress)
        await new Promise(f => setTimeout(f, 1000));
    }
  }
}
