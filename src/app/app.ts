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
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

// Adjust these paths to your project
import { NavComponent } from './shared/navbar/nav.component/nav.component';
import { FooterComponent } from './shared/footer/footer.component/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements AfterViewInit {


  showIntro = true;

  @ViewChild('mainWrapper') mainWrapper!: ElementRef;

  constructor(
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    private router: Router,        // inject router
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Scroll to top on route change
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    this.ngZone.runOutsideAngular(() => {

      requestAnimationFrame(() => {

        setTimeout(() => {
          const stage = document.getElementById('stage');

          if (stage) {
            stage.classList.add('is-active');

            setTimeout(() => {
              this.ngZone.run(() => {
                this.showIntro = false;
                this.cdr.detectChanges();
              });
            }, 1800);
          }
        }, 50);
      });
    });
  }
}
