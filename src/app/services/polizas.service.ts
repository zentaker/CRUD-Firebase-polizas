import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolizaModel } from '../models/poliza.model';
import { map } from 'rxjs/operators'

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
}
