import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditModalComponent } from '../../modal/create-edit-modal/create-edit-modal.component';
import { ManageService } from '../../manage.service';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [CommonModule, CreateEditModalComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  isModalVisible = false;
  modalMode = 'createCategory';

  constructor(private manageService: ManageService) {}

  showModal(mode: string = 'createCategory') {
    this.modalMode = mode;
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

  handleModalSubmit(data: {mode: string, title: string, description: string, color: string}) {
    switch(data.mode) {
      case 'createCategory': {
        this.manageService.addCategory({
          title: data.title,
          description: data.description,
          color: data.color
        }).subscribe({
          next: (response) => {
            console.log('Category created successfully: ', response);
          },
          error: (error) => {
            console.error('Error creating category:', error);
          }
        });

        console.log('executed hihi');
        break;
      }

      case 'editCategory': {
        console.log('Edited Successfully --DEBUG');
        console.log(`Debug Values: \nmode: ${data.mode} \ntitle: ${data.title} \ndescription: ${data.description} \ncolor: ${data.color}`);
        break;
      }

      default: {
        console.log('Something went wrong');
        break;
      }
       
    }

    this.hideModal();
  }
}
