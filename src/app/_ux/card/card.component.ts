import { Component, input } from '@angular/core';
import { Cat } from '../../_model/cat';

@Component({
  selector: 'fc-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
})
export class CardComponent {
  public cat = input.required<Cat>();
}
