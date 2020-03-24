import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HerosService } from '../../services/heros.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  hero:any = {};

  constructor( private ActivatedRoute:ActivatedRoute,
              private _herosService: HerosService 
              ) { 
              

    this.ActivatedRoute.params.subscribe( params =>{
      this.hero = this._herosService.getHero( params['id'] );
      console.log(this.hero);
      
    });
  }


}
