import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="faq-section py-5">
  <div class="container">
    
    <div class="text-center mb-5 animate-fade-in">
      <h2 class="fw-bold display-5">Frequently Asked Questions</h2>
      <p class="text-muted lead">Everything you need to know about FarmEase</p>
    </div>

    <div class="faq-container mx-auto" style="max-width: 800px;">
      
      <div *ngFor="let faq of faqs; let i = index" class="faq-item">
        <input type="checkbox" [id]="'faq-' + i" class="faq-toggle">
        
        <label [for]="'faq-' + i" class="faq-header">
          <span class="question-text">{{ faq.question }}</span>
          <div class="icon-box">
            <span class="vertical-line"></span>
            <span class="horizontal-line"></span>
          </div>
        </label>

        <div class="faq-content">
          <div class="content-inner">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  `,
  styles: [`
    /* 1. General Styles */
    .faq-section {
      background: linear-gradient(135deg, #f9fbf9 0%, #ffffff 100%);
      min-height: 500px;
      font-family: 'Inter', sans-serif;
    }

    .faq-item {
      background: #ffffff;
      border: 1px solid #e0e6e0;
      border-radius: 12px;
      margin-bottom: 16px;
      transition: all 0.3s ease;
    }

    .faq-item:hover {
      border-color: #4caf50;
      box-shadow: 0 4px 12px rgba(76, 175, 80, 0.1);
    }

    /* 2. The Checkbox Hack */
    .faq-toggle {
      display: none; /* Hide the actual checkbox */
    }

    /* 3. Header Styling */
    .faq-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px;
      cursor: pointer;
      user-select: none;
    }

    .question-text {
      font-weight: 600;
      font-size: 1.1rem;
      color: #2e3d2e;
      transition: color 0.3s ease;
    }

    /* 4. Icon Animation (Plus to Minus) */
    .icon-box {
      position: relative;
      width: 20px;
      height: 20px;
    }

    .vertical-line, .horizontal-line {
      position: absolute;
      background-color: #4caf50;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .vertical-line {
      width: 2px;
      height: 100%;
      left: 50%;
      margin-left: -1px;
    }

    .horizontal-line {
      width: 100%;
      height: 2px;
      top: 50%;
      margin-top: -1px;
    }

    /* Rotate vertical line to hide it when open */
    .faq-toggle:checked + .faq-header .vertical-line {
      transform: rotate(90deg);
      opacity: 0;
    }
    
    .faq-toggle:checked + .faq-header .question-text {
      color: #2e7d32;
    }

    /* 5. Content Animation (The Slide) */
    .faq-content {
      max-height: 0; /* Initially hidden */
      overflow: hidden;
      opacity: 0;
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1), opacity 0.3s ease;
    }

    .faq-toggle:checked ~ .faq-content {
      max-height: 1000px; /* Large enough to fit content */
      opacity: 1;
      transition: max-height 0.5s cubic-bezier(1, 0, 1, 0), opacity 0.5s ease;
    }

    .content-inner {
      padding: 0 24px 24px 24px;
      color: #5a6d5a;
      line-height: 1.6;
    }

    /* 6. Page Load Animation */
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in {
      animation: fadeInUp 0.8s ease-out forwards;
    }
  `]
})
export class FaqSectionComponent {
  faqs = [
    {
      question: 'What is FarmEase?',
      answer: 'FarmEase is a smart agriculture platform that helps farmers monitor crops, manage soil health, and optimize yield using AI-driven tools.'
    },
    {
      question: 'How does FarmEase improve crop production?',
      answer: 'We provide real-time insights via IoT sensors and satellite data, offering smart recommendations on irrigation and fertilization.'
    },
    {
      question: 'Can I buy and sell products on FarmEase?',
      answer: 'Yes! Our integrated Marketplace connects you directly with verified buyers and sellers for seeds, fertilizers, and machinery.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-grade encryption to ensure your farm data and transactions are private and protected.'
    },
    {
      question: 'How do I get started?',
      answer: 'Simply click the "Sign Up" button, create your farm profile, and start adding your fields to get instant soil health reports.'
    }
  ];
}
