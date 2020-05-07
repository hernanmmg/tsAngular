import { Component, OnInit } from '@angular/core';
import { Countries, SquadNumber } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { TeamService } from '../services/team.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-player-dialog',
  templateUrl: './player-dialog.component.html',
  styleUrls: ['./player-dialog.component.scss']
})
export class PlayerDialogComponent implements OnInit {
  private team;
  public countries = Object.keys(Countries).map(key => ({label: key, key: Countries[key]}));
  public squadNumber = Object.keys(SquadNumber).slice(Object.keys(SquadNumber).length);
  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService
      .getTeams()
      .pipe(take(1))
      .subscribe(teams => {
        if (teams.length > 0) {
          this.team = team[0];
        }
      });
  }

  private newPlayer(playerFromValue) {
    const key = this.playerService.addPlayer(playerFromValue).key;
  }

}
