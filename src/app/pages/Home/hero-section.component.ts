import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  standalone: true,
  template: `
<section class="hero position-relative d-flex align-items-center">
  
  <!-- Overlay -->
  <div class="hero-overlay position-absolute w-100 h-100"></div>

  <!-- Content -->
  <div class="container text-center text-white hero-content position-relative">
    
    <h1 class="display-3 fade-in">
      <span class="text-success">farm</span>
      <span class="text-warning">Ease</span> : Smarter Farming Starts Here
    </h1>

    <p class=" fade-in delay-1 display-5 ">
      Optimize your crops, monitor soil health, and increase yield with AI-driven tools designed for modern farmers.
    </p>

    <div class="d-flex justify-content-center gap-3 mt-4 fade-in delay-2 hero-buttons">
      <button class="btn btn-success btn-lg rounded-4 cta-button" (click)="scrollTo()">
        Get Started
      </button>
      <button class="btn btn-outline-light btn-lg rounded-4 about-button" routerLink="/About">
        About Us
      </button>
    </div>

  </div>
</section>
  `,
  styles: [`
/* ================= HERO SECTION ================= */

.hero {
  height: 65vh;
  background: url('https://agrezen.zozothemes.com/wp-content/uploads/2025/11/home-1-intro-3.webp') 
              no-repeat center center/cover;
  position: relative;
  color: #fff;
  text-align: center;
  overflow: hidden;
}

/* Overlay */
.hero-overlay {
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

/* Heading */
.hero h1 {
  font-size: 3.2rem;
  margin-bottom: 1rem;
}

/* Paragraph */
.hero p {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: rgba(255,255,255,0.85);
}

/* Buttons */
.hero-buttons button {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

/* CTA Hover */
.cta-button:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

/* About Hover */
.about-button:hover {
  transform: translateY(-3px) scale(1.05);
  background-color: #28a745;
  border-color: #28a745;
  color: #fff !important;
}

/* ================= ANIMATIONS ================= */

.fade-in {
  opacity: 0;
  animation: fadeInUp 1s forwards;
}

.fade-in.delay-1 { animation-delay: 0.5s; }
.fade-in.delay-2 { animation-delay: 1s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ================= RESPONSIVE ================= */

@media (max-width: 768px) {
  .hero {
    height: 75vh;
  }

  .hero h1 {
    font-size: 2.2rem;
  }

  .hero p {
    font-size: 1.1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons button {
    width: 200px;
  }
}
  `]
})
export class HeroSectionComponent {

  scrollTo() {
    document.getElementById('home')?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}
