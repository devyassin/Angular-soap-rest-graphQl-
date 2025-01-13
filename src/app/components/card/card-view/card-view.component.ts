import { Component, Input } from '@angular/core';
import { IdCardData } from '../../../model/interface/Card';
import { Router } from '@angular/router';
import { CinCardService } from '../../../services/cin-card.service';
import { ToastrService } from 'ngx-toastr';
import { ExtractedFormComponent } from '../../ui/extracted-form/extracted-form.component';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [ExtractedFormComponent, CommonModule],
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
})
export class CardViewComponent {
  @Input() data: IdCardData[] = [];

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private cardService: CinCardService,
    private modalService: NgbModal
  ) {}

  isLoading: boolean = false;
  selectedItem: IdCardData | null = null;

  trackById(index: number, item: IdCardData): number | null {
    return item.id || null;
  }

  async downloadFile(fileUrl: string): Promise<void> {
    this.isLoading = true;
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = downloadUrl;
      const fileName = fileUrl.split('/').pop() || 'downloaded-file';
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(downloadUrl);
      this.toastr.success('File downloaded successfully');
    } catch (error) {
      console.error('Error downloading file:', error);
      this.toastr.error('Failed to download file.');
    } finally {
      this.isLoading = false;
    }
  }

  navigateToCardDetails(id: number): void {
    this.router.navigate([`/dashboard/cards/${id}`]);
  }

  openDeleteModal(content: any, id: number) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          if (result === 'Delete') {
            this.deleteCard(id);
          }
        },
        (reason) => {
          // Modal dismissed
        }
      );
  }

  async deleteCard(id: number): Promise<void> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      this.cardService.deleteCinCard(id).subscribe({
        next: () => {
          this.data = this.data.filter((item) => item.id !== id);
          Swal.fire('Deleted!', 'The card has been deleted.', 'success');
        },
        error: (err) => {
          console.error('Error deleting card:', err);
          Swal.fire('Error!', 'There was an issue deleting the card.', 'error');
        },
      });
    }
  }
  updateItem(updatedData: IdCardData): void {
    this.isLoading = true;
    this.cardService.updateCinCard(updatedData.id!, updatedData).subscribe({
      next: () => {
        this.data = this.data.map((item) =>
          item.id === updatedData.id ? updatedData : item
        );
        this.toastr.success('Item updated successfully!');
        this.selectedItem = null;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error updating item:', err);
        this.toastr.error('Failed to update item.');
        this.isLoading = false;
      },
    });
  }

  resetForm(): void {
    this.selectedItem = null;
  }

  toggleUpdateMode(item: IdCardData): void {
    this.router.navigate([`/dashboard/update_cin/${item?.id}`]);
  }
}
