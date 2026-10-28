import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
  scrollToAstrologers() {
    const element = document.getElementById('expert-astrologers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
