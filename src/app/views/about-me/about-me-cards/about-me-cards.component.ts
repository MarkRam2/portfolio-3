import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me-cards',
  templateUrl: './about-me-cards.component.html',
  styleUrls: ['./about-me-cards.component.css']
})
export class AboutMeCardsComponent {
  @Input() header: string ="";
  @Input() subtext: string = "";
}
