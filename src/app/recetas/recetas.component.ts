import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetarioService } from '../services/recetario.service';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent {

  recetas:any;
  mybreakpoint: number;

  constructor(
    private route: ActivatedRoute,
    private service:RecetarioService
  ){
    this.loadData()
    this.mybreakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }

  handleSize(event:any) {
    this.mybreakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
    }

  async loadData(){
    const id = this.route.snapshot.params['id']
    console.log(id)
    this.service.getRecetasByRecetarop(id).then((data)=>{
      this.recetas = data
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }
}
