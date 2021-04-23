import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolizaModel } from '../models/poliza.model';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PolizasService {

  private url = 'https://loginangulardemo-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }
  
  crearPoliza(poliza: PolizaModel) {
    return this.http.post(`${this.url}/polizas.json`, poliza).pipe(
      map((resp: any) => {
        poliza.id = resp.name;
        return poliza;
      })

    )

  }
  actualizarPoliza(poliza: PolizaModel) {
    return this.http.put(`${this.url}/polizas/${poliza.id}.json`, poliza);

  }
  borrarPolizas(id: string) {
    return this.http.delete(`${this.url}/polizas/${id}.json`)
  }

  getPoliza(id: string) {
    return this.http.get(`${this.url}/polizas/${id}.json`);

  }

  getPolizas() {
    return this.http.get(`${this.url}/polizas.json`).pipe(
      map(resp => this.crearArreglo(resp)), delay(1500)
    )
  }
  private crearArreglo(polizasObj: Object) {

    const polizas: PolizaModel[] = [];
 
    if (polizasObj === null) {
      return [];
    }
    Object.keys(polizasObj).forEach(key => {
      const poliza: PolizaModel = polizasObj[key];
      poliza.id = key;
      polizas.push(poliza);

    })
    return polizas;

  }
}
