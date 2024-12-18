import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExtractedFormComponent } from '../../ui/extracted-form/extracted-form.component';
import { ExtractedInfo } from '../../../model/interface/ExtractedInfo';
import { FileUploadZoneComponent } from '../../ui/file-upload-zone/file-upload-zone.component';
import { IdCardData } from '../../../model/interface/Card';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FileUploadZoneComponent, ExtractedFormComponent],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent {
  selectedFile: File | null = null;
  extractedInfo: IdCardData = {
    fullName: '',
    firstName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    idNumber: '',
    expiryDate: '',
    photoUrl: '', // Excluded in the display logic but included for clarity
  };

  handleFile(file: File) {
    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
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
    // Here you would typically start the OCR process
    // and update the extractedInfo object with the results
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
    };
  }

  submitForm(info: IdCardData) {
    if (!this.selectedFile) {
      alert('Please select a file first');
      return;
    }

    console.log('Submitting form with data:', {
      file: this.selectedFile,
      info,
    });
    // Here you would typically send the data to your backend
  }
}
