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

  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
  }
}
