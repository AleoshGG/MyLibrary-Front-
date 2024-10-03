import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent { 
  @Output() save = new EventEmitter<void>();

  // Método que se ejecuta al hacer clic en "Guardar"
  onSave() {
    this.save.emit();
  }

  cancel() {
    location.reload();
  }
}
