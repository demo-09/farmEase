import { Component,AfterViewInit,NgZone  } from '@angular/core';
import {NavComponent} from './shared/navbar/nav.component/nav.component'
import {HeroSectionComponent}from './shared/navbar/hero-section.component/hero-section.component'
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component/footer.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroSectionComponent , NavComponent , FooterComponent ,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  implements AfterViewInit {


  showIntro = true; // always show on page load

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const wrapper:any = document.getElementById('main-wrapper');

    // trigger reveal animation
    setTimeout(() => {
      wrapper?.parentElement?.classList.add('is-active');

      // hide bootloader after animation finishes
      setTimeout(() => {
        // run inside Angular zone to trigger change detection
        this.ngZone.run(() => {
          this.showIntro = false;
        });
      }, 1600); // match your animation duration
    }, 100); // slight delay to ensure DOM is ready
  }
}
