import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GiphyService } from 'src/app/shared/giphy/giphy.service';
import { MensagemService } from 'src/app/shared/mensagem/mensagem.service';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { UsuarioService } from 'src/app/shared/usuario/usuario.service';

@Component({
  selector: 'app-mensagem-list',
  templateUrl: './mensagem-list.component.html',
  styleUrls: ['./mensagem-list.component.scss'],
})
export class MensagemListComponent implements OnInit {
  mensagens:Array<any> = []
  sub:     Subscription;
  sala_id:any;
  lastId;
  isLoaded = false;
  user:any = {}
  
  constructor(
    private route: ActivatedRoute,
    private mensagenservice:MensagemService,
    private giphyService:GiphyService,
    //private usuarioService:UsuarioService,
    private router: Router,
    private auth:AuthService) { }

  ngOnInit() {
    this.user = this.auth.currentUserValue
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        interval(1000)
        .pipe(
          startWith(0),
          switchMap(() => this.mensagenservice.getAll(id))
        )
        .subscribe(res =>{
          this.lastId = res.mensagens[res.mensagens.length - 1].id;

          for(let mensagem of res.mensagens){
            this.sala_id = id;
            this.giphyService.get(mensagem.nome_remetente).subscribe(url=>{mensagem.url = url;});
            mensagem.sala_id = id;

            if(this.mensagens.length == 0){
              this.mensagens = res.mensagens;
            }else{
              let result = this.procurarDiferenca(this.mensagens,res.mensagens);
              this.mensagens.concat(result)
            }   
          }
          
          this.isLoaded = true;
        });
      }
    });
  }

  procurarDiferenca(A:any,B:any){
    return A.filter(item1 => !B.some(item2 => (item2.id === item1.id)))
  }

  get($event){
    this.mensagens.unshift($event)
  }

  move(id) {
    this.router.navigate(['/mensagem-list',id]);
  }


}
