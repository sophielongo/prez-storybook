import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-toto',
  templateUrl: 'toto.component.html',
})
export class TotoComponent {
  public text = input.required<string>();
}
