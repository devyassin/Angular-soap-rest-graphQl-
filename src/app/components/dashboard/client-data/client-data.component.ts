import { Component } from '@angular/core';
import { CardViewComponent } from '../../card/card-view/card-view.component';
import { DataFilterComponent } from '../../table/data-filter/data-filter.component';
import { IdCardData } from '../../../model/interface/Card';
import { TableViewComponent } from '../../table/table-view/table-view.component';
import { CinCardService } from '../../../services/cin-card.service';

@Component({
  selector: 'app-client-data',
  standalone: true,
  imports: [CardViewComponent, DataFilterComponent, TableViewComponent],
  templateUrl: './client-data.component.html',
  styleUrl: './client-data.component.css',
})
export class ClientDataComponent {
  showTable = true;
  data: IdCardData[] = [];
  filteredData: IdCardData[] = [];
  newCard: IdCardData = {
    fullName: '',
    firstName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    idNumber: '',
    expiryDate: '',
    photoUrl: '',
    filePath: '',
    imageUrl: '',
    fileUrl: '',
  };

  constructor(private cinCardService: CinCardService) {}

  ngOnInit(): void {
    this.fetchCinCards();
  }
  toggleView() {
    this.showTable = !this.showTable;
  }

  onSearch(term: string) {
    if (!term) {
      this.filteredData = [...this.data];
      return;
    }

    const searchTerm = term.toLowerCase();
    this.filteredData = this.data.filter(
      (item) =>
        item.fullName.toLowerCase().includes(searchTerm) ||
        item.firstName.toLowerCase().includes(searchTerm) ||
        item.placeOfBirth.toLowerCase().includes(searchTerm)
    );
  }

  fetchCinCards(): void {
    this.cinCardService.getAllCinCards().subscribe({
      next: async (data: IdCardData[]) => {
        // Create a new array with resolved promises
        const processedData = await Promise.all(
          data.map(async (card) => {
            const processedCard: IdCardData = {
              ...card,
              imageUrl: card.photoUrl
                ? await this.loadImage(card.photoUrl)
                : undefined,
              fileUrl: card.filePath
                ? await this.loadImage(card.filePath)
                : undefined,
            };
            return processedCard;
          })
        );

        // Now assign the processed data with resolved promises
        this.data = processedData;
      },
      error: (err) => console.error('Failed to fetch Cin Cards:', err),
    });
  }
  private loadImage(fileName: string): Promise<string> {
    return new Promise((resolve) => {
      this.cinCardService.getImage(fileName).subscribe({
        next: (blob) => {
          resolve(URL.createObjectURL(blob));
        },
        error: () => {
          resolve('');
        },
      });
    });
  }
  /**
   * Add a new Cin Card
   */
  addCinCard(): void {
    this.cinCardService.createCinCard(this.newCard).subscribe({
      next: (data) => {
        this.data.push(data);
        console.log('Cin Card created successfully:', data);
      },
      error: (err) => console.error('Failed to create Cin Card:', err),
    });
  }

  /**
   * Delete a Cin Card
   * @param id - Cin Card ID
   */
  deleteCinCard(id: number): void {
    this.cinCardService.deleteCinCard(id).subscribe({
      next: () => {
        this.data = this.data.filter(
          (card: IdCardData) => card.idNumber !== id.toString()
        );
        console.log('Cin Card deleted successfully');
      },
      error: (err) => console.error('Failed to delete Cin Card:', err),
    });
  }
}
