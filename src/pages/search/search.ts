import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import * as _ from 'lodash';

import { AllCards, Card } from '../../app/all-cards';

@IonicPage({
  name: 'Search',
  segment: 'search'
})
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  public searchString = '';
  public searchedCards: Card[] = [];

  constructor() {}

  public doSearch() {
    this.updateAllCards();
  }

  private updateAllCards() {
    const cards = [];

    if(this.searchString.length <= 3) {
      this.searchedCards = [];
      return;
    }

    const searchTerms = this.searchString.split(',').map(str => str.trim().toLowerCase());

    Object.keys(AllCards).forEach(role => {
      Object.keys(AllCards[role]).forEach(type => {
        const arr = AllCards[role][type];
        arr.forEach((card, index) => {
          card.role = role;
          card.type = type;
          card.index = index;
        });

        cards.push(...arr.filter(card => {

          return _.every(searchTerms, term => {
            return _.includes(card.name.toLowerCase(), term)
                || _.includes(role.toLowerCase(), term)
                || _.includes(type.toLowerCase(), term);
          });

        }));
      });
    });

    this.searchedCards = cards;
  }
}
