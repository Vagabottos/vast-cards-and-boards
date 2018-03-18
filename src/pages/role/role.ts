import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, IonicPage, Platform, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as _ from 'lodash';

import { Role } from '../../app/defs';
import { AllCards, Card } from '../../components/card/all-cards';

@IonicPage({
  name: 'Role',
  segment: 'role/:role'
})
@Component({
  selector: 'page-role',
  templateUrl: 'role.html'
})
export class RolePage implements OnInit {

  @ViewChild(Slides) slides: Slides;

  public isLoaded: boolean;

  public role: Role;
  public allCards: Card[] = [];

  public lastViewedCard = 0;

  private get lastslideKey(): string {
    return `${this.role}-lastslide`;
  }

  constructor(
    public navParams: NavParams,
    private storage: Storage,
    public platform: Platform
  ) {}

  async ngOnInit() {
    this.role = this.navParams.get('role');

    const cardTypes = Object.keys(AllCards[this.role]);
    this.allCards = _(cardTypes)
      .map(type => {
        const arr = AllCards[this.role][type];
        arr.forEach((card, index) => {
          card.type = type;
          card.index = index;
        });
        return arr;
      })
      .flattenDeep()
      .value();

    this.lastViewedCard = await this.storage.get(this.lastslideKey);
    this.isLoaded = true;
  }

  public updateCurrentSlide(slider: Slides) {
    this.storage.set(this.lastslideKey, slider.realIndex);
    
  }

}
