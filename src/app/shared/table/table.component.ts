import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private router: Router) {}
  @Input() title: string = '';
  @Input() buttonText?: string;
  @Input() buttonAction?: () => void;
  @Input() columns: { field: string; header: string }[] = [];
  @Input() data: any[] = [];
  @Input() actions?: {
    edit?: (code: number) => void;
    delete?: (code: number) => void;
  };
}
