import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientDetailsComponent } from './components/client/client-details/client-details.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerFormComponent } from './components/customer/customer-form/customer-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full',
  },
  {
    path: 'master',
    component: MasterComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'client',
    component: ClientComponent,
    children: [
      {
        path: 'details',
        component: ClientDetailsComponent,
      },
    ],
  },
  { path: 'client/:id', component: ClientDetailsComponent },

  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/form',
    component: ProductFormComponent,
  },
  {
    path: 'product/form/:id',
    component: ProductFormComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'customer/form',
    component: CustomerFormComponent,
  },
  {
    path: 'customer/form/:id',
    component: CustomerFormComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
