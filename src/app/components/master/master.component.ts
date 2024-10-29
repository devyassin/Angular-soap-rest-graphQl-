import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { AppComponent } from '../../app.component';
import { RolesComponent } from '../roles/roles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, AppComponent, RolesComponent,CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent: string = 'Roles';
  changeTab(type: string): void {
    this.currentComponent =type;
  }
}
