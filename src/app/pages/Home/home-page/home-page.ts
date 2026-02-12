import { Component } from '@angular/core';
import {  CommonModule } from '@angular/common';
import { AboutUsComponent } from '../about-us';
import { HeroSectionComponent } from '../hero-section.component';
import { FaqSectionComponent } from '../faq';
import { Services } from '../services';
@Component({
  selector: 'app-home-page',
  imports: [CommonModule, AboutUsComponent, HeroSectionComponent, Services, FaqSectionComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
