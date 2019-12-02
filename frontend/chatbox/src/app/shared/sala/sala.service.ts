import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  public API = environment.url;
  public SALA_API = this.API + '/sala';

  constructor(private http: HttpClient) {}

  getAll(id): Observable<any> {
    return this.http.get(this.SALA_API + '/listar/categoria/' + id);
  }

  get(id: string) {
    return this.http.get(this.SALA_API + '/' + id);
  }

  save(SALA: any): Observable<any> { 
    let result: Observable<Object>;

    if (SALA['id']) {
      result = this.http.put(this.SALA_API + "/" + SALA.id, SALA);
    } else {
      result = this.http.post(this.SALA_API + "/registrar/", SALA);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
