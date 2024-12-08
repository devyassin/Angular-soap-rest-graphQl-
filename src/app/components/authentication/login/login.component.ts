import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = { email: '', password: '' };
  showPassword = false;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    if (!this.formData.email || !this.formData.password) {
      alert('Please fill in all fields.');
      return;
    }

    this.authService.login(this.formData).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        alert('Login successful!');
      },
      error: (err) => console.error('Login failed', err),
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
