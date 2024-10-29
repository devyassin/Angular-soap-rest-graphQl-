import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_CUSTOMERS,
  GET_CUSTOMER_BY_ID,
  CREATE_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
} from '../graphql/queries';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Customer, CustomerRequest } from '../model/interface/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private apollo: Apollo) {}

  getCustomers(): Observable<Customer[]> {
    return this.apollo
      .watchQuery({ query: GET_CUSTOMERS })
      .valueChanges.pipe(map((result: any) => result.data.customersList));
  }

  getCustomerById(id: number): Observable<any> {
    return this.apollo
      .watchQuery({
        query: GET_CUSTOMER_BY_ID,
        variables: { id },
      })
      .valueChanges.pipe(map((result: any) => result.data.customerById));
  }

  createCustomer(customer: CustomerRequest): Observable<any> {
    return this.apollo
      .mutate({
        mutation: CREATE_CUSTOMER,
        variables: { customer },
      })
      .pipe(map((result: any) => result.data.createCustomer));
  }

  updateCustomer(id: number, customer: CustomerRequest): Observable<any> {
    return this.apollo
      .mutate({
        mutation: UPDATE_CUSTOMER,
        variables: { id, customer },
      })
      .pipe(map((result: any) => result.data.updateCustomer));
  }
  deleteCustomer(id: number): Observable<Boolean> {
    return this.apollo
      .mutate({
        mutation: DELETE_CUSTOMER,
        variables: { id },
      })
      .pipe(map((result: any) => result.data.deleteCustomer));
  }
}
