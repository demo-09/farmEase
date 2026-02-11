import { Component, AfterViewInit, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavComponent } from './shared/navbar/nav.component/nav.component';
import { HeroSectionComponent } from './shared/navbar/hero-section.component/hero-section.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroSectionComponent, NavComponent, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {

  showIntro = true;

  constructor(private ngZone: NgZone, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Only run in browser
    if (!isPlatformBrowser(this.platformId)) return;

    // Wait for DOM to be ready
    setTimeout(() => {
      const wrapper: any = document.getElementById('main-wrapper');
      if (!wrapper) return; // extra safety

      // trigger animation
      wrapper.parentElement?.classList.add('is-active');

      // hide intro after animation duration
      setTimeout(() => {
        this.ngZone.run(() => {
          this.showIntro = false;
        });
      }, 1600); // match your animation
    }, 0); // 0ms ensures code runs after browser DOM is ready
  }
}
