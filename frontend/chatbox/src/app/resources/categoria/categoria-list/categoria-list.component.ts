import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/shared/categoria/categoria.service';
import { GiphyService } from 'src/app/shared/giphy/giphy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss'],
})
export class CategoriaListComponent implements OnInit {
  categorias:Array<any> = []
  constructor(
    private categoriaService:CategoriaService,
    private giphyService:GiphyService,
    private router: Router) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(data=>{
      this.categorias = data;

      for(let categoria of this.categorias){
        let url = this.giphyService.get(categoria.nome);
        url.subscribe(url => categoria.icon = url);
      }
    })
  }

  move(id) {
    this.router.navigate(['/sala-list/',id]);
  }

}
