import { Component, OnInit } from '@angular/core';
import { CTAComponent } from '../_ux/cta/cta.component';
import { Cat } from '../_model/cat';
import { CardComponent } from '../_ux/card/card.component';

@Component({
  selector: 'fc-home',
  standalone: true,
  templateUrl: 'home.component.html',
  imports: [CTAComponent, CardComponent],
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  protected cats: Cat[] = [
    {
      name: 'Mathieu',
      img: 'https://cdn.pixabay.com/photo/2024/02/17/00/18/cat-8578562_1280.jpg',
      nickname: 'Le doyen',
    },
    {
      name: 'Esmeralda',
      img: 'https://cdn.pixabay.com/photo/2022/04/03/17/48/animal-7109566_960_720.jpg',
      nickname: 'La rebelle',
    },
    {
      name: 'Pierrot',
      img: 'https://cdn.pixabay.com/photo/2017/08/21/19/52/cat-2666597_960_720.jpg',
      nickname: 'le gros chat roux',
    },
  ];
  protected selectedCat: string | null = 'Mathieu';

  protected select(name: string) {
    this.selectedCat = name;
  }
}
