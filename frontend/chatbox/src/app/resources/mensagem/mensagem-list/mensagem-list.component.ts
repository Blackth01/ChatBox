import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from 'src/app/shared/giphy/giphy.service';
import { MensagemService } from 'src/app/shared/mensagem/mensagem.service';

@Component({
  selector: 'app-mensagem-list',
  templateUrl: './mensagem-list.component.html',
  styleUrls: ['./mensagem-list.component.scss'],
})
export class MensagemListComponent implements OnInit {
  mensagens:Array<any> = []
  sub:     Subscription;
  sala_id:any;
  isLoaded = false;
  
  constructor(
    private route: ActivatedRoute,
    private mensagenservice:MensagemService,
    private giphyService:GiphyService,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.mensagenservice.getAll(id).subscribe(data=>{
          console.log(data.mensagens)
          this.mensagens = data.mensagens;

          for(let mensagem of this.mensagens){
            this.sala_id = id;
            mensagem.sala_id = id;
          }
          this.isLoaded = true;
        })
      }
    });
    //this.pingMensages();
  }

  pingMensages(){
    setInterval(function(){ 
      alert("Hello"); }, 
      1000
    );
  }

  get($event){
    this.mensagens.unshift($event)
  }

  move(id) {
    this.router.navigate(['/mensagem-list',id]);
  }


}
