import { Component, EventEmitter, Output, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-edit-modal',
  imports: [CommonModule],
  templateUrl: './create-edit-modal.component.html',
  styleUrl: './create-edit-modal.component.scss'
})
export class CreateEditModalComponent implements AfterViewInit {

  @ViewChild('titleInput') titleInput!: ElementRef<HTMLInputElement>;
  @ViewChild('descInput') descInput!: ElementRef<HTMLInputElement>;
  @ViewChild('colorInput') colorInput!: ElementRef<HTMLInputElement>;


  @Input() mode: string = 'createCategory';
  @Input() categoryData: any = null;

  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{mode: string, title: string, description: string, color: string}>();

  ngAfterViewInit() {
    //console.log('ngAfterViewInit called, categoryData:', this.categoryData);
    
    if (this.mode === 'editCategory' && this.categoryData) {
      setTimeout(() => {
        // console.log('Setting values:', {
        //   title: this.categoryData.title,
        //   desc: this.categoryData.description,
        //   color: this.categoryData.color
        // });
        
        if (this.titleInput) this.titleInput.nativeElement.value = this.categoryData.title || '';
        if (this.descInput) this.descInput.nativeElement.value = this.categoryData.description || '';
        if (this.colorInput) this.colorInput.nativeElement.value = this.categoryData.color || '';
      }, 100);
    }
  }

  closeModal(): void {
	  this.close.emit();
  }

  submitForm(): void {
    const title = this.titleInput?.nativeElement.value || '';
    const description = this.descInput?.nativeElement.value || '';
    const color = this.colorInput?.nativeElement.value ?? '';

    this.submit.emit({
      mode: this.mode,
      title: title,
      description: description,
      color: color
    });
  }
}