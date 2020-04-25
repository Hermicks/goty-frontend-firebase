import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];
  buttonDisabled: boolean;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.gameService.getNominados().subscribe(
      (games) => {
        // console.log(games);
        this.juegos = games;
      }
    );
  }

  votarJuego(id: string): void {
    this.buttonDisabled = true;
    this.gameService.votarJuego(id).subscribe(
      (resp: { ok: boolean, mensaje: string }) => {
        // console.log(resp);
        if (resp.ok) {
          this.buttonDisabled = false;
          Swal.fire('Gracias', resp.mensaje, 'success');
        } else {
          this.buttonDisabled = false;
          Swal.fire('Ooooops', resp.mensaje, 'error');
        }
      }
    );
  }

}
