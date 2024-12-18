import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-id-card-photo',
  standalone: true,
  imports: [],
  templateUrl: './id-card-photo.component.html',
  styleUrl: './id-card-photo.component.css',
})
export class IdCardPhotoComponent {
  @Input() photoUrl!: string;
}
