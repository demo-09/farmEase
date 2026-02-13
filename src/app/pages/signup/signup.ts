import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private router: Router) { }

  signup(name: string, email: string, password: string) {
    name = name.trim();
    email = email.trim();
    password = password.trim();

    if (!name || !email || !password) {
      alert('All fields are required');
      return;
    }

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('User') || '[]');

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
      password
    };

    users.push(newUser);
    localStorage.setItem('User', JSON.stringify(users));

    alert('Signup successful! Please login.');

    // Navigate to login page
    this.router.navigate(['/login']);
  }
}
