import { Component, OnInit } from '@angular/core';
import { PolizaModel } from 'src/app/models/poliza.model';
import { PolizasService } from 'src/app/services/polizas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {

  polizas: PolizaModel[] = [];
  cargando = false;
  

  constructor(private PolizasService: PolizasService) { }

  ngOnInit(): void {

    this.cargando = true;
    this.PolizasService.getPolizas().subscribe(
      resp => {
        this.polizas = resp;
        this.cargando = false;
        
      }
    );
  }

  borrarPoliza(poliza: PolizaModel, i: number) {

    Swal.fire({
      icon: 'question',
      title: 'Esta Seguro?',
      text: `Esta seguro que quiere eliminar ${ poliza.producto }`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.polizas.splice(i, 1);
        this.PolizasService.borrarPolizas(poliza.id).subscribe();
       
     }
   })


  }

}
