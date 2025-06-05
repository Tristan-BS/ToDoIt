import { Component, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-edit-modal',
  imports: [CommonModule],
  templateUrl: './create-edit-modal.component.html',
  styleUrl: './create-edit-modal.component.scss'
})
export class CreateEditModalComponent {

  @ViewChild('titleInput') titleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('descInput') descInput!: ElementRef<HTMLInputElement>;
  @ViewChild('colorInput') colorInput!: ElementRef<HTMLInputElement>;


  @Input() mode: string = 'createCategory';
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{mode: string, title: string, description: string, color: string}>();

  closeModal(): void {
	  this.close.emit();
  }

  submitForm(): void {
    const title = this.titleInput?.nativeElement.value || '';
    const description = this.descInput?.nativeElement.value || '';
    const color = this.colorInput?.nativeElement.value ?? '';

    // Maybe better approach.
    //const colorValue = this.colorInput?.nativeElement.value;
    //const color = colorValue && colorValue.trim() !== '' ? colorValue : null;

    this.submit.emit({
      mode: this.mode,
      title: title,
      description: description,
      color: color
    });
  }
}