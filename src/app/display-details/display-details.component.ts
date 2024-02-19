import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css'
})
export class DisplayDetailsComponent {

  showParagraph = true;
  clicks = [];
  counter = 0;
  onToggle() {
    this.showParagraph = !this.showParagraph;
    this.clicks.push(++this.counter);
  }

}
