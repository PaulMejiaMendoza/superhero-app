import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heros:any[] = [];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
              private _herosService: HerosService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params =>{
       this.termino = params['termino'];
       this.heros = this._herosService.buscarHeros( params['termino'] );
        console.log( this.heros);
 
    })
  }

}