import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {

  public horas: any[] = [];
  public dias: any[] = [];
  public materias: any[] = [];
  public relleno: any[] = [];

  private clase: '';
  public message: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    // this.getMaterias(navParams.get("clase"));
  }

  ionViewDidLoad() {
    this.getHoras();
    this.getDiaSemana();
    this.getMaterias(this.navParams.get('clase'));
  }

  getHoras() {

    this.sqlite.create(
      {
        name: 'Horario16.db',
        location: 'default',
        createFromLocation: 1
      }
    ).then(
      (db: SQLiteObject) => {
        //La consulta del execute DEBE OSEA DEBE, EN SERIO, probarse antes en sqlstudio
        db.executeSql('Select  h.descripcion from horasSemana h', [])
          .then(
          //dentro del then del executeSQL
          // el resultado se recoge en el fatarrow
          (data) => {
            for (let i = 0; i < data.rows.length; i++) {
              this.horas.push(data.rows.item(i));
              console.info(this.horas[i]);
            }
          }
          ).catch(
          (e) => {
            console.log("error en execute");
            this.message = e;
          }
          );
      }
      ).catch(
      (e) => {
        console.log("error en openddbb");
        this.message = e;
      }
      )
  }
  getDiaSemana() {
    this.sqlite.create(
      {
        name: 'Horario16.db',
        location: 'default',
        createFromLocation: 1
      }
    ).then(
      (db: SQLiteObject) => {
        //La consulta del execute DEBE OSEA DEBE, EN SERIO, probarse antes en sqlstudio
        db.executeSql('Select  d.nombre from diaSemana d', [])
          .then(
          //dentro del then del executeSQL
          // el resultado se recoge en el fatarrow
          (data) => {
            for (let i = 0; i < data.rows.length; i++) {
              this.dias.push(data.rows.item(i));
              console.info(this.dias[i]);
            }
          }
          ).catch(
          (e) => {
            console.log("error en execute");
            this.message = e;
          }
          );
      }
      ).catch(
      (e) => {
        console.log("error en openddbb");
        this.message = e;
      }
      )

  }

  getMaterias(idGrupo: any) {
    console.log(idGrupo);
    this.sqlite.create(
      {
        name: 'Horario16.db',
        location: 'default',
        createFromLocation: 1
      }
    ).then(
      (db: SQLiteObject) => {
        //La consulta del execute DEBE OSEA DEBE, EN SERIO, probarse antes en sqlstudio
        db.executeSql(`Select m.nombre,hs.descripcion, ds.nombre as nombredia from materia m, materiahoraclase mhc, horaclase hc, diaclase dc, horasSemana hs, diaSemana ds,grupo g where  m.idMateria = mhc.idMateria and mhc.idHoraClase = hc.idHoraClase and hc.idDiaClase = dc.idDiaClase and hc.idHorasSemana = hs.idHorasSemana and ds.idDiaSemana = dc.idDiaSemana and dc.idGrupo = g.idGrupo  and g.nombre = '${idGrupo.clases}' `, [])
          .then(
          //dentro del then del executeSQL
          // el resultado se recoge en el fatarrow
          (data) => {
            for (let i = 0; i < data.rows.length; i++) {
              this.materias.push(data.rows.item(i));
              console.info(this.materias[i]);
            }
            this.hacerRelleno();
          }
          ).catch(
          (e) => {
            console.log("error en execute");
            this.message = e;
          }
          );
      }
      ).catch(
      (e) => {
        console.log("error en openddbb");
        this.message = e;
      }
      )
  }

  hacerRelleno() {
    for (let index = 0; index < this.horas.length; index++) {
      const hora = this.horas[index].descripcion;
      let fila = {
        hora: hora
      }
      for (let index2 = 0; index2 < this.dias.length; index2++) {
        const dia = this.dias[index2].nombre;
        fila[dia] = this.materias.filter((element) => element.nombredia === dia && element.descripcion === hora);
      }
      this.relleno.push(fila);
    }
  }

  getMateriasHoraDia(nombre, descripcion) {
    let n = [];
    for (let index = 0; index < this.relleno.length; index++) {
      const fila = this.relleno[index];
      if(fila.hora === descripcion){
        n = fila[nombre];
      }
    }
    return n;
  }
}
