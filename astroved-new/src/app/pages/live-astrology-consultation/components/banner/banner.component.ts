import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  showSteps = false;

  toggleSteps(event: Event) {
    event.preventDefault();
    this.showSteps = !this.showSteps;
    
    if (this.showSteps) {
      setTimeout(() => {
        const stepsElement = document.querySelector('.booking-steps-wrapper');
        if (stepsElement) {
          stepsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150); // slight delay to allow CSS transition to begin
    }
  }
  scrollToAstrologers(event: Event) {
    event.preventDefault();
    const element = document.getElementById('expert-astrologers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
