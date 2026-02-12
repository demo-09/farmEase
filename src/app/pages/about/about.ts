import { Component } from '@angular/core';
import { Testimonials } from '../../Components/testimonials/testimonials';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [Testimonials, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
