import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditModalComponent } from '../../modal/create-edit-modal/create-edit-modal.component';
import { ManageService } from '../../manage.service';
import { Observable } from 'rxjs';

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
  allCategories!: Observable<any[]>;
  selectedCategory: any = null;

  constructor(private manageService: ManageService) {}

  ngOnInit(): void {
    this.refreshCategories();
  }

  refreshCategories(): void {
    this.allCategories = this.manageService.getAllCategories();
  }

  showModal(mode: string = 'createCategory', category: any = null) {
    this.modalMode = mode;
    this.isModalVisible = true;
    this.selectedCategory = category;
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
            this.refreshCategories();
          },
          error: (error) => {
            console.error('Error creating category:', error);
          }
        });

        console.log('executed hihi');
        break;
      }

      case 'editCategory': {
        if (this.selectedCategory && this.selectedCategory.id) {
          const categoryID = Number(this.selectedCategory.id);

          this.manageService.editCategory(
            categoryID,
            {
              title: data.title,
              description: data.description,
              color: data.color
            }
          ).subscribe({
            next: (response) => {
              console.log('Category edited successfully: ', response);
              this.refreshCategories();
            },
            error: (error) => {
              console.error('Error editing category: ', error);
            }
          });
        } else {
          console.error('Cannot update category: Missing ID');
        }
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
