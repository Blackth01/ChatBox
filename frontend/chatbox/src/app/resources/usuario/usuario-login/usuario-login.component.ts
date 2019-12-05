import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpParams, HttpResponse } from '@angular/common/http';
import { AuthService } from '../../../shared/auth/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {
  @Output('usuario') usuarioSelecionado = new EventEmitter<any>();
  usuario: any = {};
  error: any;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    public alertController: AlertController) {
  }

  ngOnInit() {
    
    if(this.router.url == '/usuario-logout'){
      this.logout() 
    }
  }

  logout(){
    this.authService.logOut()
    this.router.navigate(['/usuario-login']);
  }

  onSubmit(usuario: any) {
    const payload = new HttpParams()
      .set('username', usuario.email)
      .set('password', usuario.senha)
      .set('grant_type', 'password');

      this.loading = true;//payload
      this.authService.authenticate({username:usuario.email,password:usuario.senha})
          .pipe(first())
          .subscribe(
              data => {
                this.router.navigate(['home']);
              },
              error => {
                  console.log(error)
                  this.error = error;
                  this.loading = false;
              });
  }

  selectUsuario(usuario:any) {
    this.usuarioSelecionado.emit(usuario);
  }

}
