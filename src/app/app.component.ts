import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'Search';

  pages: Array<{ title: string, component: any, color: string, icon?: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Search Cards',  component: 'Search',      color: '',     icon: 'search' },
      { title: 'Cave',          component: 'Role',        color: 'cave' },
      { title: 'Dragon',        component: 'Role',        color: 'dragon' },
      { title: 'Ghost',         component: 'Role',        color: 'ghost' },
      { title: 'Ghoul',         component: 'Role',        color: 'ghoul' },
      { title: 'Goblins',       component: 'Role',        color: 'goblins' },
      { title: 'Knight',        component: 'Role',        color: 'knight' },
      { title: 'Thief',         component: 'Role',        color: 'thief' },
      { title: 'Unicorn',       component: 'Role',        color: 'unicorn' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, { role: page.title });
  }
}
