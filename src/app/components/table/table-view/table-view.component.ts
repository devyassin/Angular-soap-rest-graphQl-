import { Component, Input } from '@angular/core';
import { IdCardData } from '../../../model/interface/Card';

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent {
  @Input() data: IdCardData[] = [];
}
