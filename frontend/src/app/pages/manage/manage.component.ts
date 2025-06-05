import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditModalComponent } from '../../modal/create-edit-modal/create-edit-modal.component';

@Component({
  selector: 'app-manage',
  imports: [CommonModule, CreateEditModalComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent {
  isModalVisible = false;
  modalMode = 'createCategory';

  showModal(mode: string = 'createCategory') {
    this.modalMode = mode;
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }

  handleModalSubmit(data: {mode: string, title: string, description: string, color: string}) {
    if (data.mode === 'createCategory') {
      console.log('Created Successfully --DEBUG');
      console.log(`Debug Values: \n${data.mode} \n${data.title} \n${data.description} \n${data.color}`);
    } else if (data.mode === 'editCategory') {
      console.log('Edited Successfully --DEBUG');
    } else {
      console.log('Something went wrong');
    }

    this.hideModal();
  }
}
