import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Game } from '../../interfaces/interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  results: any[] = [];

  constructor(
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
    // Obtengo la referencia a mi base de datos y estoy atengo a cambios que sufra
    this.db.collection('goty').valueChanges()
      .pipe(
        map(
          // Es lo mismo que abajo (resp: Game[]) => resp.map(game => ({name: game.name, value: game.votos}))
          (resp: Game[]) => resp.map(({ name, votos }) => ({ name, value: votos }))
        )
      )
      .subscribe(
        juegos => {
          console.log(juegos);
          this.results = juegos;
        }
      );
  }

}
