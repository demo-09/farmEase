import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,           // 2. Ensure this is true if using latest Angular
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrls: ['./card.css']
})
export class Card {

  @Input() data: any;

  handleImageError(event: any) {
    event.target.src = 'logo.png';
  }
}
