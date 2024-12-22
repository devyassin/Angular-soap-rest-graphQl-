import { Component, Input } from '@angular/core';
import { IdCardData } from '../../../model/interface/Card';
import { ImageModalComponent } from '../../../shared/image-modal/image-modal.component';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [ImageModalComponent],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css',
})
export class TableViewComponent {
  @Input() data: IdCardData[] = [];

  selectedImage: string | null = null;
  isModalOpen = false;
  showImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  trackByFullName(index: number, item: any): string {
    return item.fullName;
  }

  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedImage = null;
  }
}
