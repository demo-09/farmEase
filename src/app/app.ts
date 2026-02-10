import { Component } from '@angular/core';
import {NavComponent} from './shared/navbar/nav.component/nav.component'
import {HeroSectionComponent}from './shared/navbar/hero-section.component/hero-section.component'
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent,NavComponent,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
