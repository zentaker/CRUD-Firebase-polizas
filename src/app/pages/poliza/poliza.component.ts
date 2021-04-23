import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { PolizaModel } from 'src/app/models/poliza.model';
import { PolizasService } from 'src/app/services/polizas.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {
  forma!: FormGroup;
  
  poliza = new PolizaModel();

  


  constructor(private fb: FormBuilder, private PolizasService: PolizasService, private route: ActivatedRoute) {
    this.crearFormulario();
    this.crearListener();
    
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'nuevo') {
      this.PolizasService.getPoliza(id).subscribe((resp: PolizaModel) => {
        this.poliza = resp;
        this.poliza.id = id;
        this.forma.reset(this.poliza)
        
      })
    }
  }



  crearFormulario() {

    this.forma = this.fb.group({
      id: [''], //el primero es el valor por defecto; segundo validadores
      cliente: [''],
      producto: [''],
      bien: [''],
      fecha: [''],
      estado: [false],
    });

  }
  crearListener() {
     //para cmabios en el estado del formulario
     this.forma.valueChanges.subscribe(data => {
       //console.log(data);
    })

  }

  guardar() {
    this.poliza = this.forma.value;

    Swal.fire({
      icon: 'info',
      title: 'Espere',
      text: 'Guardando informacion',
      allowOutsideClick: false,
 
    });
    Swal.showLoading();


    if (this.poliza.id) {
      console.log(this.poliza.id);
      
  
      this.PolizasService.actualizarPoliza(this.poliza).subscribe(resp => {
        
      console.log(resp);
      this.forma.reset(resp)
      });

      Swal.fire({
        icon: 'success',
        title: this.poliza.producto,
        text: 'Se actualizo correctamente',
   
   
      });
      

      
    } else {
      
  
    this.PolizasService.crearPoliza(this.poliza).subscribe(resp => {
      console.log(resp);
      this.forma.reset(resp)
      Swal.fire({
        icon: 'success',
        title: this.poliza.producto,
        text: 'Se actualizo correctamente',
   
   
      });
    });

    }
    

    
  }

}
