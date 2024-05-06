
import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  avgSeasons:Number=0
  constructor() { }
  getSerieList():Array<Serie>{
    return dataSeries
  }
  
  ngOnInit() {
    this.series=this.getSerieList();
    this.avgSeasons=this.avgSeries(this.series);
    console.log("Valor promedio: "+this.avgSeasons)
  }

  avgSeries(series:Array<Serie>):Number{
    let suma:number=0;
    let contador:number=series.length;
    series.forEach((serie)=>suma=suma+serie.seasons);
    let avg:number=suma/contador
    return avg
    
  }

}
