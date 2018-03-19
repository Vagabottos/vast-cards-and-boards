import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NavParams, IonicPage, Platform, Slides, PopoverController, ViewController,
  ModalController
} from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ImageViewerController }  from 'ionic-img-viewer';

import * as _ from 'lodash';

import { Role } from '../../app/defs';
import { AllRules, AllBoards, AllCards, Card, AllHelp } from '../../app/all-cards';

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

  public get hasMultipleBoards(): boolean {
    return AllBoards[this.role].length > 1;
  }

  public get hasMultipleRules(): boolean {
    return AllRules[this.role].length > 1;
  }

  public get cardTypes(): string[] {
    return Object.keys(AllCards[this.role]);
  }

  private get lastslideKey(): string {
    return `${this.role}-lastslide`;
  }

  constructor(
    public navParams: NavParams,
    public platform: Platform,
    private popoverCtrl: PopoverController,
    private modalCtrl: ModalController,
    private storage: Storage,
    private imageViewer: ImageViewerController
  ) {}

  async ngOnInit() {
    this.role = this.navParams.get('role');

    this.updateAllCards();

    this.lastViewedCard = await this.storage.get(this.lastslideKey) || 0;
    this.isLoaded = true;
  }

  private updateAllCards() {
    this.allCards = _(this.cardTypes)
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

  public updateCurrentSlide(slider: Slides) {
    this.storage.set(this.lastslideKey, slider.realIndex);
  }

  public openRules(idx = 0) {
    const img = document.createElement('img');
    img.src = `assets/vast/${this.role.toLowerCase()}-rules-${idx}.png`;
    this.imageViewer.create(img).present();
  }

  public openBoard(idx = 0) {
    const img = document.createElement('img');
    img.src = `assets/vast/${this.role.toLowerCase()}-board-${idx}.png`;
    this.imageViewer.create(img).present();
  }

  public openPopover($event) {

    const opts = { boards: [], rules: [] };

    if(this.hasMultipleBoards) {
      opts.boards = AllBoards[this.role].map((boardName, idx) => {
        return {
          name: boardName,
          click: () => this.openBoard(idx)
        };
      });
    }

    if(this.hasMultipleRules) {
      opts.rules = AllRules[this.role].map((rulesName, idx) => {
        return {
          name: rulesName,
          click: () => this.openRules(idx)
        };
      });
    }

    const popover = this.popoverCtrl.create(OverflowOptionsPage, opts);

    popover.present({
      ev: $event
    });
  }

  public openFAQ() {
    this.modalCtrl.create(FAQModalPage, { role: this.role, faqs: AllHelp[this.role] }).present();
  }

}

@Component({
  template: `
    <ion-list>
      <ion-item-divider color="dark" *ngIf="boards.length > 0">Boards</ion-item-divider>
      <ion-item *ngFor="let board of boards" (click)="board.click()">
        {{ board.name }}
      </ion-item>
      
      <ion-item-divider color="dark" *ngIf="rules.length > 0">Rules</ion-item-divider>
      <ion-item *ngFor="let rules of rules" (click)="rules.click()">
        {{ rules.name }}
      </ion-item>
    </ion-list>
  `
})
export class OverflowOptionsPage {

  public boards: any[] = [];
  public rules: any[] = [];

  constructor(
    public navParams: NavParams
  ) {}

  ngOnInit() {
    this.boards = this.navParams.get('boards');
    this.rules  = this.navParams.get('rules');
  }
}

@Component({
  template: `
    <ion-header>
      <ion-toolbar [color]="role.toLowerCase()">
        <ion-title>
          The {{ role }} FAQ
        </ion-title>
        <ion-buttons start>
          <button ion-button icon-only (click)="viewCtrl.dismiss()">
            <ion-icon name="close"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item *ngFor="let faq of faqs" text-wrap>
          {{ faq }}
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class FAQModalPage {

  public role: Role;
  public faqs: string[];

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {}

  ngOnInit() {
    this.role = this.navParams.get('role');
    this.faqs  = this.navParams.get('faqs');
  }
}
