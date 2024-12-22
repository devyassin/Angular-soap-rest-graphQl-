import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExtractedInfo } from '../../../model/interface/ExtractedInfo';
import { IdCardData } from '../../../model/interface/Card';
import dayjs from 'dayjs';
import { ToastrService } from 'ngx-toastr';
import { CinCardService } from '../../../services/cin-card.service';

@Component({
  selector: 'app-extracted-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './extracted-form.component.html',
  styleUrl: './extracted-form.component.css',
})
export class ExtractedFormComponent {
  constructor(
    private toastr: ToastrService,
    private cinCardService: CinCardService
  ) {}

  @Input() info: IdCardData = {
    fullName: '',
    firstName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    idNumber: '',
    expiryDate: '',
    photoUrl: '',
    filePath: '',
    imageUrl: '',
  };

  @Output() onReset = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<IdCardData>();

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cinCardService.uploadFile(file).subscribe({
        next: (fileName) => {
          this.info.photoUrl = fileName;
          this.fetchImage(fileName); // Fetch the image after uploading
          this.toastr.success('Image uploaded successfully!');
        },
        error: (err) => {
          this.toastr.error('Image upload failed!');
        },
      });
    }
  }

  private fetchImage(fileName: string): void {
    this.cinCardService.getImage(fileName).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        this.info.imageUrl = url; // Set the fetched image URL
        this.toastr.success('Image fetched successfully!');
      },
      error: (err) => {
        this.toastr.error('Failed to fetch the image!');
      },
    });
  }
}
