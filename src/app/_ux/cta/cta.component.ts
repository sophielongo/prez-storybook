import { Component, input, output } from '@angular/core';

@Component({
  selector: 'fc-cta',
  standalone: true,
  templateUrl: 'cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CTAComponent {
  public active = input(false);
  protected action = output<MouseEvent>();
}
