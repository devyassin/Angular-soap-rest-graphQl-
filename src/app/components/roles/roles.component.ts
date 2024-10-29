import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAbilityGlobal } from '../../model/interface/ability';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  abilities: IAbilityGlobal[] = [];
  firstName: string = 'yassine lamouadden';
  age: number = 23;

  pokesService = inject(MasterService);

  ngOnInit(): void {
    this.getPokes();
  }

  showAlert(message: string): void {
    alert(message);
  }

  getPokes(): void {
    this.pokesService.getPokesService().subscribe((response: any) => {
      this.abilities = response.abilities;
    },(err: any) => {
      alert("Cant cal the api");
    });
  }
}
