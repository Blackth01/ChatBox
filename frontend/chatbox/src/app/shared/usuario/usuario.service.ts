import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public API = environment.url;
  public USUARIO_API = this.API + '/usuario';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.USUARIO_API + '/');
  }

  get(id: string) {
    return this.http.get(this.USUARIO_API + '/' + id);
  }

  save(usuario: any): Observable<any> { 
    let result: Observable<Object>;

    if (usuario['id']) {
      result = this.http.put(this.USUARIO_API + "/" + usuario.id, usuario);
    } else {
      result = this.http.post(this.USUARIO_API, usuario);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
