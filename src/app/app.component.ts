import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { RolesComponent } from './components/roles/roles.component';
import { MasterComponent } from './components/master/master.component';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { ApolloModule } from 'apollo-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RolesComponent,
    MasterComponent,
    NavbarComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSnackBarModule,
    ApolloModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_18_project';
  showNavbar: boolean = false;
  constructor(private router: Router) {
    // Subscribe to router events to check the current route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        const token = localStorage.getItem('token');

        console.log('Current Route:', currentRoute); // Debugging route
        console.log('Token:', token); // Debugging token

        // Show the navbar only if the token exists and the route is not login/register
        this.showNavbar =
          !!token &&
          !(
            currentRoute.includes('login') || currentRoute.includes('register')
          );

        console.log('Show Navbar:', this.showNavbar); // Debugging navbar visibility
      }
    });
  }
}
