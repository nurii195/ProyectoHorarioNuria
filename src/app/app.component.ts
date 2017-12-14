import { HorarioPage } from './../pages/horario/horario';
import { AccesoDatosJsonProvider } from './../providers/acceso-datos-json/acceso-datos-json';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: any;

  mostrarNivel1 = null;
  mostrarNivel2 = null;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public acceso: AccesoDatosJsonProvider) {
    this.initializeApp();

    this.acceso.getMenus()
    .subscribe((response)=> {
        this.pages = response;
        console.log(this.pages);
    });

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
    this.nav.setRoot(page.component);
  }


  Level1(idx) {
    if (this.isLevel1(idx)) {
      this.mostrarNivel1 = null;
    } else {
      this.mostrarNivel1 = idx;
    }
  };

  Level2(idx) {
    if (this.isLevel2(idx)) {
      this.mostrarNivel1 = null;
      this.mostrarNivel2 = null;
    } else {
      this.mostrarNivel1 = idx;
      this.mostrarNivel2 = idx;
    }
  };

  isLevel1(idx) {
    return this.mostrarNivel1 === idx;
  };

  isLevel2(idx) {
    return this.mostrarNivel2 === idx;
  };

  openlist(c) {
    //this.nav.push(HorarioPage, {clase: c});
    this.nav.setRoot(HorarioPage, {clase: c});
  }


}
