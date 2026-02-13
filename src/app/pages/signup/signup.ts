import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private router: Router) { }

  signup(name: string, email: string, password: string,phone:string,address:string) {
    name = name.trim();
    email = email.trim();
    password = password.trim();
    phone = phone.trim();
    address = address.trim();

    if (!name || !email || !password || !phone || !address) {
      alert('All fields are required');
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    const existingUser = users.find((u: any) => u.email === email);

    if (existingUser) {
      alert('User with this email already exists!');
      return;
    }

    // Create new user
    const newUser = {
      id: `usr-${Date.now()}`,
      name,
      email,
      password,
      phone,
      address
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please login.');

    // Navigate to login page
    this.router.navigate(['/login']);
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

}
