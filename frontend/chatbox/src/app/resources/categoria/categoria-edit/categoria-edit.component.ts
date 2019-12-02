import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { UsuarioService } from 'src/app/shared/usuario/usuario.service';
import { GiphyService } from 'src/app/shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';
import { CategoriaService } from 'src/app/shared/categoria/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.scss'],
})
export class CategoriaEditComponent implements OnInit {
  error:   any;
  categoria: any = {};
  sub:     Subscription;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService,
              private categoriaService: CategoriaService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
  }

  move() {
    this.router.navigate(['/home']);
  }

  save(form: NgForm) {
      this.categoriaService.save(form).subscribe(result => {
        this.move();
      }, error => console.error(error));
  }

  remove(href) {
    this.categoriaService.remove(href).subscribe(result => {
      this.move();
    }, error => console.error(error));
  }

}
