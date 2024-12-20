import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-filter.component.html',
  styleUrl: './data-filter.component.css'
})
export class DataFilterComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm = '';

  onSearch(term: string) {
    this.search.emit(term);
  }
}
