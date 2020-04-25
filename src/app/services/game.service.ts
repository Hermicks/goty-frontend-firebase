import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { Game } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos: Game[] = [];

  constructor(
    private http: HttpClient
  ) { }

  // Obtener colleción con los juegos nominados al GOTY
  getNominados(): Observable<Game[]> {
    // Opcional -> Controlar la llamada al endpoint para no llamarla dos veces y obtener los mismos datos
    if (this.juegos.length > 0) {
      // No tenemos juegos
      console.log('Desde caché');
      return of(this.juegos);
    } else {
      console.log('Desde internet');
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
      .pipe(
        /**
         * Operador map -> Manipulamos los elementos a devolver de la transmisión en la secuencia
         * Operador tap -> Manipulamos algo dentro de la secuencia pero devolvemos el observable tal cual nos llegó
         */
        tap(
          juegos => this.juegos = juegos
        )
      );
    }
  }

  votarJuego(id: string): Observable<any> {
    return this.http.post(`${ environment.url }/api/goty/${ id }`, {})
    .pipe(
      catchError(err => {
        return of(err.error);
      })
    );
  }
}
