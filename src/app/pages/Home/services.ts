
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  styles: [
    `
 .services-section {
  background: #e6ffe8;
  padding: 100px 0;
}

/* Section Title */
.section-title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.3;
  color: #1b1b1b;
}

/* Green Button */
.btn-theme {
  background: #2e7d32;
  color: #fff;
  border-radius: 40px;
  padding: 12px 28px;
  font-weight: 600;
  transition: 0.3s ease;
}

.btn-theme:hover {
  background: #1b5e20;
  color: #fff;
}

/* ===== OVAL CARD ===== */
.service-card {
  background: #e6ffe8;
  border-radius: 10%;
  border:2px solid black;
  padding:55px 50px;
  text-align: center;
  transition: all 0.4s ease;
  height: 100%;
}

/* Icon circle */
.icon-circle {
  width: 70px;
  height: 70px;
  background: #66bb6a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  font-size: 26px;
  color: #fff;
}

/* Title */
.service-card h5 {
  font-weight: 600;
  margin-bottom: 15px;
}

/* Description */
.service-card p {
  font-size: 14px;
  color: #6c757d;
}

/* Read More */
.read-more {
  margin-top: 15px;
  display: inline-block;
  font-weight: 600;
  color: #2e7d32;
  text-decoration: none;
}

.service-card:hover {
  background: linear-gradient(135deg, #a8e063, #56ab2f);
  color: #fff;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-card:hover p,
.service-card:hover .read-more {
  color: #fff;
}

.service-card:hover .icon-circle {
  background: #fff;
  color: #2e7d32;
}


`,
  ],
  template: ` 
<section class="services-section">
  <div class="container">

    <!-- Top Row -->
    <div class="row align-items-center mb-5">
      <div class="col-lg-6">
        <span class="badge bg-success text-dark px-3 py-2 mb-3">
          Our Services
        </span>

        <h2 class="section-title">
  Empowering Modern Agriculture <br>
  with Innovation & Marketplace
</h2>
</div>

<div class="col-lg-6 text-lg-end mt-4 mt-lg-0">
  <p class="text-muted">
    FarmEase brings together the latest agricultural news, expert insights,
    sustainable farming techniques, and a trusted marketplace for buying and
    selling crops and machinery - connecting farmers, suppliers, and agri-enthusiasts
    to simplify and strengthen modern agriculture.
  </p>

  <a class="btn btn-theme mt-2">
    Explore Our Services →
  </a>
</div>

    </div>

    <!-- Cards -->
    <div class="row g-4">

      <div class="col-lg-3 col-md-6"
           *ngFor="let service of services; let i = index">

        <div class="service-card fade-in">

          <div class="icon-circle">
            <i class="bi" [ngClass]="service.icon"></i>
          </div>

          <h5>{{ service.title }}</h5>
          <p>{{ service.desc }}</p>

    

        </div>

      </div>

    </div>

  </div>
</section>

`,
})
export class Services {
  services = [
    {
      icon: 'bi-newspaper',
      title: 'Agri News & Trends',
      desc: 'Stay updated with the latest agricultural news, market trends, and policy changes affecting modern farming.'
    },

    {
      icon: 'bi-shop',
      title: 'Agri Marketplace',
      desc: 'Buy and sell crops, seeds, fertilizers, and machinery through our trusted and farmer-friendly marketplace.'
    },
    {
      icon: 'bi-gear',
      title: 'Machinery Exchange',
      desc: 'Connect with verified suppliers to purchase or sell tractors, tools, and modern agricultural equipment.'
    },
    {
      icon: 'bi-people',
      title: 'Farmer Community',
      desc: 'Join a growing network of farmers and agri-enthusiasts to share knowledge, experiences, and opportunities.'
    }
  ];

}
