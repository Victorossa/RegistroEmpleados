import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/shared/empleado.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private service: EmpleadoService,
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      EmpleadoID: null,
      NombreCompleto: '',
      EMPCodigo: '',
      Movil: '',
      Posicion: '',
    }
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmpleado(form.value).subscribe(res => {
      this.toastr.success('Guardado con Exito!!!','EMP. Registrado');
      this.service.refreshList();
      this.resetForm(form);
    })
  }

}
