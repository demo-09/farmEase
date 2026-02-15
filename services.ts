import { Component,OnInit  } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {

    ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
