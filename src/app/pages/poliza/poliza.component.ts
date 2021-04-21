import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PolizaModel } from 'src/app/models/poliza.model';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {
  poliza = new PolizaModel();

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm) {
    console.log(form)
  }

}
