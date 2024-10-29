import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.css',
})
export class  ClientDetailsComponent {
  userId: string | null = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
