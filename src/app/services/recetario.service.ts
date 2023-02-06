import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SERVER_URL } from 'src/environments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class RecetarioService {

  constructor(
    private http: HttpClient
  ) { }

  getRecetarios(){
    const url = SERVER_URL + 'recetarios'
    return this.http.get(url).toPromise()
  }
  getRecetasByRecetarop(id:number){
    const url = SERVER_URL + 'recetarios/recetas/'+id
    return this.http.get(url).toPromise()
  }
}
