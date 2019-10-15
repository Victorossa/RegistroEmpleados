import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/empleado.service';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent implements OnInit {

  constructor(private service : EmpleadoService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
