import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login  {
  auth = inject(AuthService);
  router = inject(Router);

  login(email: string, password: string) {
    email = email.trim();
    password = password.trim();

    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    const users = JSON.parse(localStorage.getItem('User') || '[]');

    const foundUser = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!foundUser) {
      alert('Invalid email or password');
      return;
    }

  
    localStorage.setItem('CurrentUser', JSON.stringify(foundUser));


    this.auth.login();

    this.router.navigate(['/']);
  }

}
