import { Component } from '@angular/core';
import { RecetarioService } from '../services/recetario.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  recetarios: any;

  constructor(
    private service:RecetarioService
  ){
    this.loadData()
  }

  async loadData(){
    await this.service.getRecetarios().then((data)=>{
      this.recetarios = data
    }).catch((err)=>{
      console.log(err)
    })
  }
  getCountOfRecetas(recetas:any){
    return recetas.length
  }
  goTo(recetario_id:any){

  }


}
