import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators   } from '@angular/forms';
import { RecargaService } from './recarga.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GerardoAngular';

  recargaForm: FormGroup;

  constructor(private fb: FormBuilder, private recargaService: RecargaService) {
    this.recargaForm = this.fb.group({
      operador: ['', Validators.required],
      numeroTelefono: ['', Validators.required],
      valorRecarga: ['', [Validators.required, Validators.min(1)]],
      vendedor: ['', Validators.required]
    });
  }

  realizarRecarga() {
    if (this.recargaForm.valid) {
      const recargaData = this.recargaForm.value;
      this.recargaService.realizarRecarga(recargaData).subscribe(response => {
        // Lógica después de realizar la recarga
        console.log('Recarga realizada con éxito:', response);
      });
    } else {
      console.log('Por favor, complete el formulario correctamente.');
    }
  }
}