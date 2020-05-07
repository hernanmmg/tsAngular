import { Player, Countries } from './player';

export interface Team {
  $key?: string;
  name: string;
  country: string;
  players: Player[];
}