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
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { CarteNationalComponent } from './components/dashboard/carte-national/carte-national.component';
import { UploadComponent } from './components/dashboard/upload/upload.component';
import { CardComponent } from './components/card/card.component';
import { ClientDataComponent } from './components/dashboard/client-data/client-data.component';
import { UpdateCinComponent } from './components/dashboard/update-cin/update-cin.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'master',
//     pathMatch: 'full',
//   },
//   {
//     path: 'master',
//     component: MasterComponent,
//   },
//   {
//     path: 'employee',
//     component: EmployeeComponent,
//   },
//   {
//     path: 'client',
//     component: ClientComponent,
//     children: [
//       {
//         path: 'details',
//         component: ClientDetailsComponent,
//       },
//     ],
//   },
//   { path: 'client/:id', component: ClientDetailsComponent },

//   {
//     path: 'product',
//     component: ProductComponent,
//   },
//   {
//     path: 'product/form',
//     component: ProductFormComponent,
//   },
//   {
//     path: 'product/form/:id',
//     component: ProductFormComponent,
//   },
//   {
//     path: 'customer',
//     component: CustomerComponent,
//   },
//   {
//     path: 'customer/form',
//     component: CustomerFormComponent,
//   },
//   {
//     path: 'customer/form/:id',
//     component: CustomerFormComponent,
//   },
//   {
//     path: '**',
//     component: ErrorComponent,
//   },
// ];
export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'dashboard/carte-national', component: CarteNationalComponent },
  { path: 'dashboard/upload', component: UploadComponent },
  { path: 'dashboard/cards/:id', component: CardComponent },
  { path: 'dashboard/cards', component: ClientDataComponent },
  { path: 'dashboard/stats', component: StatsComponent },
  { path: 'dashboard/update_cin/:id', component: UpdateCinComponent }
];
