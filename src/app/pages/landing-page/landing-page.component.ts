import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faqData } from './faq-data';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  showAnswer: boolean = false;
  faqsData = faqData;
  currentAns!: number;

  showAns(index: number): void {
    this.currentAns = index;

    if (this.showAnswer === !this.showAnswer) {
      this.showAnswer = true;
    } else {
      this.showAnswer = !this.showAnswer;
    }
  }
}
