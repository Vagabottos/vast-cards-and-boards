import { Component, Input } from '@angular/core';
import { CardType, Role } from '../../app/defs';

const CARD_WIDTH = 409;
const CARD_HEIGHT = 572;

const ROW_HEIGHT_OFFSET = {
  0: 0,
  1: 2,
  2: 2
};

@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input()
  public cardRole: Role;

  @Input()
  public cardType: CardType;

  @Input()
  public cardIndex: number;

  public get row(): number {
    return Math.floor(this.cardIndex / 10);
  }

  public get col(): number {
    return this.cardIndex % 10;
  }

  public get objectPosition(): string {
    const colPosStart = (this.col * CARD_WIDTH);
    const rowPosStart = (this.row * CARD_HEIGHT) + (-ROW_HEIGHT_OFFSET[this.row]);
    return `-${colPosStart}px -${rowPosStart}px`;
  }

  public get imagePath(): string {
    return `assets/vast/${this.cardRole.toLowerCase()}-cards-${this.cardType.toLowerCase()}.png`;
  }

}
