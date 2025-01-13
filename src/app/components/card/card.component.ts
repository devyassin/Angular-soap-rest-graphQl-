import { Component, OnInit } from '@angular/core';
import { IdCardData } from '../../model/interface/Card';
import { IdCardComponent } from './id-card/id-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CinCardService } from '../../services/cin-card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IdCardComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'], // Note: styleUrl should be styleUrls
})
export class CardComponent implements OnInit {
  idCardData!: IdCardData;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private idCardService: CinCardService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);
      this.fetchCardData(id);
    });
    console.log(this.idCardData);
  }

  private fetchCardData(id: number): void {
    this.idCardService.getCinCardById(id).subscribe({
      next: async (data: IdCardData) => {
        const processedCard: IdCardData = {
          ...data,
          imageUrl: data.photoUrl
            ? await this.loadImage(data.photoUrl)
            : undefined,
          fileUrl: data.filePath
            ? await this.loadImage(data.filePath)
            : undefined,
        };
        this.idCardData = processedCard;
      },
      error: (error) => {
        console.error('Error fetching card data:', error);
      },
    });
  }

  private loadImage(fileName: string): Promise<string> {
    return new Promise((resolve) => {
      this.idCardService.getImage(fileName).subscribe({
        next: (blob) => {
          resolve(URL.createObjectURL(blob));
        },
        error: () => {
          resolve('');
        },
      });
    });
  }
}
