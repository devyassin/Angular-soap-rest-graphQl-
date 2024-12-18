import { Component, OnInit } from '@angular/core';
import { IdCardData } from '../../model/interface/Card';
import { IdCardComponent } from './id-card/id-card.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IdCardComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'], // Note: styleUrl should be styleUrls
})
export class CardComponent implements OnInit {
  idCardData!: IdCardData;

  // This method is executed when the component is initialized
  ngOnInit(): void {
    this.idCardData = {
      fullName: 'EL ALAMI',
      firstName: 'ZAINEB',
      dateOfBirth: '05/12/1983',
      placeOfBirth: 'OUARZAZATE',
      idNumber: 'U1234567',
      expiryDate: '22/07/2029',
      photoUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256',
    };

    // You can perform any additional logic here, for example:
    console.log('CardComponent initialized', this.idCardData);
  }
}
