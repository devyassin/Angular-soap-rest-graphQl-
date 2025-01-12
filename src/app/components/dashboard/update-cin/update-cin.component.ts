import { Component } from '@angular/core';
import { IdCardData } from '../../../model/interface/Card';
import { ActivatedRoute, Router } from '@angular/router';
import { CinCardService } from '../../../services/cin-card.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-cin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-cin.component.html',
  styleUrl: './update-cin.component.css',
})
export class UpdateCinComponent {
  cinCardData?: IdCardData; // To store the fetched Cin Card data
  loading = false; // To manage loading state
  error?: string; // To handle errors

  constructor(
    private route: ActivatedRoute,
    private cinCardService: CinCardService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCinCard();
  }

  /**
   * Fetch Cin Card by ID from the route parameter
   */
  private fetchCinCard(): void {
    this.loading = true;
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get the 'id' parameter
    if (isNaN(id)) {
      this.error = 'Invalid CIN Card ID';
      this.loading = false;
      return;
    }

    this.cinCardService.getCinCardById(id).subscribe({
      next: (data) => {
        this.cinCardData = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch CIN Card. Please try again later.';
        console.error(err);
        this.loading = false;
      },
    });
  }

  updateCinCard(): void {
    if (this.cinCardData) {
      this.loading = true;
      this.toastr.info('Updating CIN Card...', 'Processing');
      // Create an object with only the updated fields
      const updates: Partial<IdCardData> = {
        fullName: this.cinCardData.fullName,
        firstName: this.cinCardData.firstName,
        dateOfBirth: this.cinCardData.dateOfBirth,
        placeOfBirth: this.cinCardData.placeOfBirth,
        idNumber: this.cinCardData.idNumber,
        expiryDate: this.cinCardData.expiryDate,
      };

      this.cinCardService
        .patchCinCard(this.cinCardData.id!, updates)
        .subscribe({
          next: (response) => {
            console.log('CIN Card updated successfully', response);
            this.loading = false;
            this.toastr.success('CIN updated !');
          },
          error: (err) => {
            this.error = 'Failed to update CIN Card. Please try again later.';
            this.loading = false;
            this.toastr.error('CIN update Failed !');
          },
        });
    }

    setTimeout(() => {
      this.router.navigate([`/dashboard/cards`]);
    }, 1000);
  }
}
