import { Component, Input } from '@angular/core';
import { IdCardHeaderComponent } from "../id-card-header/id-card-header.component";
import { IdCardPhotoComponent } from "../id-card-photo/id-card-photo.component";
import { IdCardInfoComponent } from "../id-card-info/id-card-info.component";
import { IdCardData } from '../../../model/interface/Card';

@Component({
  selector: 'app-id-card',
  standalone: true,
  imports: [IdCardHeaderComponent, IdCardPhotoComponent, IdCardInfoComponent],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.css'
})
export class IdCardComponent {
  @Input() data!: IdCardData;
}
