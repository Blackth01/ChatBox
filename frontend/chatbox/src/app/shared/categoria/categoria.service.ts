import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public API = environment.url;
  public Categoria_API = this.API + '/categoria';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.Categoria_API + '/categorias/');
  }

  get(id: string) {
    return this.http.get(this.Categoria_API + '/' + id);
  }

  save(categoria: any): Observable<any> { 
    let result: Observable<Object>;

    if (categoria['id']) {
      result = this.http.put(this.Categoria_API + "/" + categoria.id, categoria);
    } else {
      result = this.http.post(this.Categoria_API + "/registrar/", categoria);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
