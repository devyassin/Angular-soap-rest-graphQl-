import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Import Router
import { NgbCollapseModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgbCollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuCollapsed = true;

  constructor(private router: Router, private modalService: NgbModal) {} // Inject Router

  /**
   * Logout the user by removing the token from local storage and navigating to the login page.
   */
  async logout() {
    const result = await Swal.fire({
      title: 'Are you sure u want to logout?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, log out !',
    });

    if (result.isConfirmed) {
      Swal.fire('Logout!', 'U have been logout.', 'success');

      localStorage.removeItem('token');

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000);
    }
  }
}
