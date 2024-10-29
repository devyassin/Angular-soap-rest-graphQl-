import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/interface/Customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { TableComponent } from '../../shared/table/table.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  newCustomer: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  };

  customerColumns = [
    { field: 'id', header: 'ID' },
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'email', header: 'Email' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'address', header: 'Address' },
  ];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((data) => {
      console.log(data);
      this.customers = data;
      console.log(this.customers);
    });
  }

  deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(
      (response) => {
        console.log('Customer deleted:', response);
        this.getCustomers();
      },
      (error) => {
        console.error('Error deleting customer:', error);
      }
    );
  }

  goToCustomerFormPage(): void {
    this.router.navigate(['/customer/form']);
  }

  goToEditCustomerFormPage(code: number): void {
    this.router.navigate([`/customer/form/${code}`]);
  }
}
