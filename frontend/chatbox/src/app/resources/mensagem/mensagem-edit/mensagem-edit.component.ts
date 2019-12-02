import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem-edit',
  templateUrl: './mensagem-edit.component.html',
  styleUrls: ['./mensagem-edit.component.scss'],
})
export class MensagemEditComponent implements OnInit {
  //@Input() mensagem:any;
  mensagem:any = {}

  constructor() { }

  ngOnInit() {}

}
