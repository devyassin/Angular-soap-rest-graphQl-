import { Component, OnInit } from '@angular/core';
import { Customer, CustomerRequest } from '../../../model/interface/Customer';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css',
})
export class CustomerFormComponent implements OnInit {
  newCustomer: CustomerRequest = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  };

  isEditMode: boolean = false;
  customerId: number | null = null;

  constructor(
    private customersService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.customerId = this.getCustomerIdFromRoute();
    if (this.customerId) {
      this.isEditMode = true;
      this.loadCustomer(this.customerId);
    }
  }

  loadCustomer(id: number) {
    this.customersService.getCustomerById(id).subscribe(
      (data: Customer) => {
        this.newCustomer = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching customer:', error);
      }
    );
  }

  addCustomer() {
    this.customersService.createCustomer(this.newCustomer).subscribe(
      (response) => {
        console.log('Customer added:', response);
        this.newCustomer = {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
        };
        this.router.navigate(['/customer']);
      },
      (error) => {
        console.error('Error adding customer:', error);
      }
    );
  }

  updateCustomer() {
    const id: number | null = this.customerId!;
    this.customersService.updateCustomer(id, this.newCustomer).subscribe(
      () => {
        this.newCustomer = {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          address: '',
        };
        this.router.navigate(['/customer']);
      },
      (error) => {
        console.error('Error updating customer:', error);
      }
    );
  }

  getCustomerIdFromRoute(): number | null {
    const id = this.route.snapshot.paramMap.get('id');
    return id ? +id : null;
  }
}
