import { Component, OnInit } from '@angular/core';
import { SalaService } from 'src/app/shared/sala/sala.service';
import { GiphyService } from 'src/app/shared/giphy/giphy.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-sala-list',
  templateUrl: './sala-list.component.html',
  styleUrls: ['./sala-list.component.scss'],
})
export class SalaListComponent implements OnInit {
  salas:Array<any> = []
  id_categoria:any = 0
  sub:     Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private salaService:SalaService,
    private giphyService:GiphyService,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.id_categoria = id;
      if (id) {
        this.salaService.getAll(id).subscribe(data=>{
          this.salas = data.salas;
          
          for(let sala of this.salas){
            let url = this.giphyService.get(sala.nome);
            sala.categoria_id = this.id_categoria;
            url.subscribe(url => sala.icon = url);
          }
        })
      }
    });
  }

  move(id) {
    this.router.navigate(['/mensagem-list',id]);
  }

}
