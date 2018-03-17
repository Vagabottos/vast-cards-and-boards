import { Component, Input } from '@angular/core';
import { CardType, Role } from '../../app/defs';

import { padStart } from 'lodash';

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

  public get imagePath(): string {
    return `assets/vast/${this.cardRole.toLowerCase()}-cards/${this.cardType.toLowerCase()}/${padStart('' + this.cardIndex, 2, '0')}.png`;
  }

}
