import { Component } from '@angular/core';
import { ExtractedInfo } from '../../../model/interface/ExtractedInfo';
import { ExtractedFormComponent } from '../../ui/extracted-form/extracted-form.component';
import { FileUploadZoneComponent } from '../../ui/file-upload-zone/file-upload-zone.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carte-national',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carte-national.component.html',
  styleUrl: './carte-national.component.css',
})
export class CarteNationalComponent {

}
