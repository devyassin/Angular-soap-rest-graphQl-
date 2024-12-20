import { Component, Input } from '@angular/core';
import { IdCardData } from '../../../model/interface/Card';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {
  @Input() data: IdCardData[] = [];
}
