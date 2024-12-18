import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExtractedInfo } from '../../../model/interface/ExtractedInfo';
import { IdCardData } from '../../../model/interface/Card';

@Component({
  selector: 'app-extracted-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './extracted-form.component.html',
  styleUrl: './extracted-form.component.css',
})
export class ExtractedFormComponent {
  @Input() info: IdCardData = {
    fullName: '',
    firstName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    idNumber: '',
    expiryDate: '',
    photoUrl: '', // Excluded in the display logic but included for clarity
  };

  @Output() onReset = new EventEmitter<void>();
  @Output() onSubmit = new EventEmitter<IdCardData>();
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.info.photoUrl = e.target.result; // Assign the data URL to your model
      };
      reader.readAsDataURL(file);
    }
  }
}
