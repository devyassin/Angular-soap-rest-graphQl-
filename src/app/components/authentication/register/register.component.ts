import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UserRegister } from '../../../model/interface/User';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formData: UserRegister = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  };
  showPassword = false;

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.register(this.formData).subscribe({
      next: () => alert('Registration successful!'),
      error: (err) => console.error('Registration failed', err),
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
