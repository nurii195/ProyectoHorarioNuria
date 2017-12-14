import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccesoDatosJsonProvider } from '../providers/acceso-datos-json/acceso-datos-json';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HorarioPage } from '../pages/horario/horario';
import { BdProvider } from '../providers/bd/bd';
import { SQLite } from '@ionic-native/sqlite';

////////////////////
//Vamos a ver directamente cuales son los pasos para trabajar con una base de datos ya creada
///////////////////

// SI TE DICE QUE NO EXISTE CORDOVA LO INSTALAS CON —---> npm install -g cordova


//1º paso crear el proyecto con integracion de cordova
//2º paso instalar el sqlite externo —---> ionic cordova plugin add cordova-sqlite-ext y rezar (mucho)
//3º paso como si no hubiera hecho nada de lo anterior,
//instalamos el sqlite plugin normal —-----> ionic cordova plugin add cordova-sqlite-storage
//4º paso despues lanzar el siguiente codigo —---> npm install —save @ionic-native/sqlite
//5º paso programa like there is no tomorrow y prueba el html en ionic serve
//6º importamos —-----> import { SQLite } from '@ionic-native/sqlite'; y añadimos a providers
//7º instalamos la plataforma —-----> ionic cordova platform add android
//8º por ultimo lanzamos —---> cordova run android


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, HorarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),HttpClientModule, HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, HorarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AccesoDatosJsonProvider,
    BdProvider,SQLite
  ]
})
export class AppModule {}
