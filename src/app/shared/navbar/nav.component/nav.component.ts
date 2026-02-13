import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../Auth/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: any = null;
  showProfilePanel = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user; // 🔥 auto updates navbar
    });
  }

  logout() {
    this.auth.logout();
  }
}
