import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the BdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BdProvider {

  constructor(public http: HttpClient, public sqlite: SQLite) {
    // this.openDDBB();
  }
  // openDDBB() {
  //   //create vale para crear un bbdd o para abrir una ya creada
  //   this.sqlite.create(
  //     //Esta es la operacion que va a abrir el objeto
  //     {
  //       name: 'Horario16.db',
  //       location: 'default',
  //       createFromLocation: 1
  //     }
  //   ).then(
  //     //dentro del then de create
  //     //una fat arrow
  //     (db: SQLiteObject) => {
  //       //La consulta del execute DEBE OSEA DEBE, EN SERIO, probarse antes en sqlstudio
  //       db.executeSql("SELECT materia.nombre from materia, materiahoraclase, horaClase,diaClase,grupo,estudios where materia.idMateria=materiahoraclase.idMateria AND materiahoraclase.idHoraClase=horaClase.idHoraClase AND horaClase.idDiaClase=diaClase.idDiaClase AND diaClase.idGrupo=grupo.idGrupo AND grupo.idEstudios=estudios.idEstudios AND estudios.idEstudios=4 ", [])
  //         .then(
  //         //dentro del then del executeSQL
  //         // el resultado se recoge en el fatarrow
  //         (data) => {

  //           for (let i = 0; i < data.rows.length; i++) {
  //             this.list.push(data.rows.item(i));
  //             console.info(this.list[i]);
  //           }
  //         }
  //         ).catch(
  //         (e) => {
  //           console.log("error en execute");
  //           this.message = e;
  //         }
  //         );
  //     }
  //     ).catch(
  //     (e) => {
  //       console.log("error en openddbb");
  //       this.message = e;
  //     }
  //     )
  // }
}
