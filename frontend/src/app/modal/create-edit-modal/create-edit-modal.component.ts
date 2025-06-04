import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-edit-modal',
  imports: [],
  templateUrl: './create-edit-modal.component.html',
  styleUrl: './create-edit-modal.component.scss'
})
export class CreateEditModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
	this.close.emit();
  }
}