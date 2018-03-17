import { Component, OnInit } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

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

  public role: Role;
  public allCards: Card[] = [];

  constructor(
    public navParams: NavParams
  ) {}

  ngOnInit() {
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
  }

}
