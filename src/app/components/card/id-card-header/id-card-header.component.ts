import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-id-card-header',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './id-card-header.component.html',
  styleUrl: './id-card-header.component.css',
})
export class IdCardHeaderComponent {}
