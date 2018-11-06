import { Injectable } from '@angular/core';
import { START_COUNT, COLORS } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  simon: string[] = [];
  player: string[] = [];
  count: number;

  constructor() {
    this.count = START_COUNT;
  }

  private get randomColor(): string {
  return COLORS[Math.floor(Math.random() *4)]
  }

  appendSimon(increment: boolean = false): void {
    if (increment) {
      this.count++;
    }
    this.simon.push(this.randomColor);
  }

  generateSimon(): string[] {
    for (let i = 0; i < this.count; i++) {
      this.appendSimon();
    }

    return this.simon;
  }

  restartSimon(): string[] {
    this.count = START_COUNT;
    return this.generateSimon();
  }

  playerGuess(val: string) {
    this.player.push(val);
    if (!this.compareSimon()) {
      this.player = [];
    }
  }

  compareSimon(): boolean {
    for (let i = 0; i < this.player.length; i++) {
      if (this.player.[i] !== this.simon[i]) {
        return false;
      }
      return true;
    }
  }
}
