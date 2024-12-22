import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExtractedFormComponent } from '../../ui/extracted-form/extracted-form.component';
import { FileUploadZoneComponent } from '../../ui/file-upload-zone/file-upload-zone.component';
import { IdCardData } from '../../../model/interface/Card';
import { ToastrService } from 'ngx-toastr';
import { OcrService } from '../../../services/ocr.service';
import dayjs from 'dayjs';
import { CinCardService } from '../../../services/cin-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FileUploadZoneComponent, ExtractedFormComponent],
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'], // Corrected property name
})
export class UploadComponent {
  selectedFile: File | null = null;
  filePath: string = '';
  extractedInfo: IdCardData = {
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

  isLoading: boolean = false;

  constructor(
    private ocrService: OcrService,
    private toastr: ToastrService,
    private cinCardService: CinCardService,
    private router: Router
  ) {}

  uploadFile(file: File): void {
    if (file) {
      this.cinCardService.uploadFile(file).subscribe({
        next: (filePath) => {
          console.log('File uploaded successfully. URL:', filePath);
          this.filePath = filePath;
          this.toastr.success('File uploaded successfully!');
        },
        error: (err) => {
          this.toastr.success('File uploaded failed!');
        },
      });
    }
    console.log(this.extractedInfo);
  }

  handleFile(file: File) {
    if (file.size > 10 * 1024 * 1024) {
      alert('File is too large. Maximum size is 10MB.');
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'image/png',
      'image/jpeg',
      'image/jpg',
    ];
    if (!allowedTypes.includes(file.type)) {
      alert('Invalid file type. Please upload a PDF or image file.');
      return;
    }

    this.selectedFile = file;
    this.extractInformations();
    this.uploadFile(file);
  }

  extractInformations() {
    if (!this.selectedFile) {
      alert('No file selected!');
      return;
    }

    this.isLoading = true;

    this.ocrService.processCinFile(this.selectedFile).subscribe({
      next: (data: IdCardData) => {
        this.extractedInfo = data;
        this.toastr.success('File processed successfully!');
        this.isLoading = false;
        console.log(data);
      },
      error: () => {
        this.toastr.error('Failed to process the file. Please try again.');
        this.isLoading = false;
      },
    });
  }

  resetForm() {
    this.selectedFile = null;
    this.extractedInfo = {
      fullName: '',
      firstName: '',
      dateOfBirth: '',
      placeOfBirth: '',
      idNumber: '',
      expiryDate: '',
      photoUrl: '',
      filePath: '',
    };
  }

  submitForm(info: IdCardData) {
    if (!this.selectedFile) {
      alert('Please select a file first');
      return;
    }

    info.filePath = this.filePath;
    console.log(info);
    this.cinCardService.createCinCard(info).subscribe(
      (response) => {
        this.toastr.success('CIN Card successfully created!');
        this.router.navigate(['/dashboard/cards']);
      },
      (error) => {
        this.toastr.error('Error while creating CIN Card!');
      }
    );
  }
}
