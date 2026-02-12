import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
<section class="about-section position-relative py-5">

  <h1 class="bg-text">AGRO</h1>

  <div class="container position-relative">
    <div class="row align-items-center">

      <!-- Left Content -->
      <div class="col-lg-4 text-lg-start text-center mb-4 mb-lg-0">
        <span class="text-secondary fs-3">ABOUT</span>
        <h2 class="display-2">
          <span class="text-success">farm</span>
          <span class="text-warning">Ease</span>
        </h2>

        <a href="#" class="btn btn-outline-dark rounded-pill px-4 mt-3">
          More About
        </a>
      </div>

      <!-- Center Image -->
      <div class="col-lg-4 text-center mb-4 mb-lg-0">
        <div class="image-frame border-4 border-success">
          <img src="aboutus.png" class="img-fluid main-img" alt="Agro">
        </div>
      </div>

      <!-- Right Content -->
      <div class="col-lg-4 text-lg-start text-center">
        <p class="text-muted">
          FarmEase is your platform for modern agriculture, providing news,
          expert insights, and updates on trends, techniques, and sustainable
          practices to keep farmers and enthusiasts informed.
        </p>

        <p class="text-muted mt-4">
          FarmEase also offers a trusted marketplace for buying and selling
          agricultural products and machinery, connecting farmers and suppliers
          efficiently to simplify agriculture and support the farming community.
        </p>
      </div>

    </div>
  </div>

</section>
  `,
  styles: [`
.about-section {
  background-color: #f8f8f8;
  overflow: hidden;
  position: relative;
}

/* Big Background Text */
.bg-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12rem;
  font-weight: 900;
  color: rgba(218, 187, 87, 0.12);
  z-index: 0;
  letter-spacing: 20px;
  pointer-events: none;
  white-space: nowrap;
}

/* Content above bg text */
.container {
  position: relative;
  z-index: 2;
}

/* Image Frame */
.image-frame {
  display: inline-block;
  padding: 15px;
  border: 5px solid #e0b13c;
}

.main-img {
  max-width: 100%;
  height: auto;
}

/* Responsive */
@media (max-width: 992px) {
  .bg-text {
    font-size: 6rem;
  }
}
  `]
})
export class AboutUsComponent { }
