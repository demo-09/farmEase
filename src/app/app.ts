import {
  Component,
  AfterViewInit,
  NgZone,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Adjust these paths to your project
import { NavComponent } from './shared/navbar/nav.component/nav.component';
import { HeroSectionComponent } from './shared/navbar/hero-section.component/hero-section.component';
import { FooterComponent } from './shared/footer/footer.component/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HeroSectionComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {
  // Ensure this is always true on refresh
  showIntro = true;

  @ViewChild('mainWrapper') mainWrapper!: ElementRef;

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    // 1. Only run in the browser
    if (!isPlatformBrowser(this.platformId)) return;

    // 2. Wrap in NgZone to ensure Angular tracks the changes
    this.ngZone.runOutsideAngular(() => {
      // requestAnimationFrame is better for refreshes than setTimeout
      requestAnimationFrame(() => {

        // Give the browser a tiny moment to stabilize
        setTimeout(() => {
          const stage = document.getElementById('stage');

          if (stage) {
            // Start the animation
            stage.classList.add('is-active');

            // 3. After animation finishes, swap to main content
            setTimeout(() => {
              this.ngZone.run(() => {
                this.showIntro = false;
                // Force UI Update
                this.cdr.detectChanges();
              });
            }, 1800); // Buffer for your 1.5s animation
          }
        }, 50);
      });
    });
  }
}
