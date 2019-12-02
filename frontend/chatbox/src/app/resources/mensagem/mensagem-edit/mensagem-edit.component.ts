import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MensagemService } from 'src/app/shared/mensagem/mensagem.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mensagem-edit',
  templateUrl: './mensagem-edit.component.html',
  styleUrls: ['./mensagem-edit.component.scss'],
})
export class MensagemEditComponent implements OnInit {
  @Input() sala_id:any;
  @Output('mensagem') mensagemSelecionado = new EventEmitter<any>();
  mensagem:any = {}
  
  constructor(private mensagemService:MensagemService) { }

  ngOnInit() {
    if(this.sala_id){
      this.mensagem.sala_id = this.sala_id;
    }
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }
  
  save(form: NgForm) {
    if(this.sala_id){
      this.mensagemService.save(form).subscribe((result:any) => {
        this.selecionado(form);
        (document.querySelector("form") as HTMLFormElement).reset();
      });
    }
  }

  selecionado(mensagem){
    this.mensagemSelecionado.emit(mensagem);
  }
}
