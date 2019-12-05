import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { SalaService } from 'src/app/shared/sala/sala.service';
import { GiphyService } from 'src/app/shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sala-edit',
  templateUrl: './sala-edit.component.html',
  styleUrls: ['./sala-edit.component.scss'],
})
export class SalaEditComponent implements OnInit {
  error:   any;
  sala: any = {};
  sub:     Subscription;
  id_categoria:any = 1;

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private auth: AuthService,
              private salaService: SalaService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.id_categoria = id;
      
      if (id) {
        this.sala.categoria_id = this.id_categoria;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  move() {
    this.router.navigate(['/sala-list',this.id_categoria]);
  }

  save(form: NgForm) {
      this.salaService.save(form).subscribe(result => {
        this.move();
      }, error => console.error(error));
  }

  remove(href) {
    this.salaService.remove(href).subscribe(result => {
      this.move();
    }, error => console.error(error));
  }

}
