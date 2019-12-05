import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  public API = environment.url;
  public MENSAGEM_API = this.API + '/mensagem';

  constructor(private http: HttpClient) {}

  getAll(sala_id:any): Observable<any> {
    return this.http.get(this.MENSAGEM_API + '/listar/sala/' + sala_id);
  }

  get(id: string) {
    return this.http.get(this.MENSAGEM_API + '/' + id);
  }

  save(MENSAGEM: any): Observable<any> { 
    let result: Observable<Object>;

    if (MENSAGEM['id']) {
      result = this.http.put(this.MENSAGEM_API + "/" + MENSAGEM.id, MENSAGEM);
    } else {
      result = this.http.post(this.MENSAGEM_API + "/registrar/", MENSAGEM);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
