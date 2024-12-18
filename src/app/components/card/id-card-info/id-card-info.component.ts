import { Component, Input } from '@angular/core';
import { IdCardData } from '../../../model/interface/Card';

@Component({
  selector: 'app-id-card-info',
  standalone: true,
  imports: [],
  templateUrl: './id-card-info.component.html',
  styleUrl: './id-card-info.component.css',
})
export class IdCardInfoComponent {
  @Input() data!: IdCardData;
}
