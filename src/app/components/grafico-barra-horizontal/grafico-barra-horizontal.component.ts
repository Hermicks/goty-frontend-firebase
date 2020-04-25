import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 20
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 25
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 15
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 30
  //   }
  // ];

  // options
  showXAxis  = true;
  showYAxis  = true;
  gradient   = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  interval: any;

  constructor() {
    // this.interval = setInterval(() => {
    //   // console.log('TICK');
    //   // Para poder realizar esta instrucción, necesitamos crear arrays nuevos desde cero ya que ngx-chart no funciona sino se hace así

    //   // Operación spread -> Extrae todos los resultados del arreglo y me devuelve uno nuevo, sin ninguna relación con el arreglo results
    //   const newValues = [...this.results];

    //   // tslint:disable-next-line: forin
    //   for (const i in newValues) {
    //     newValues[i].value = Math.round(Math.random() * 500);
    //   }

    //   // Me aseguro de crear un nuevo arreglo rompiendo la relacion con la lógica de encima
    //   this.results = [...newValues];
    // }, 1500);
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  onSelect(event) {
    console.log(event);
  }

}
