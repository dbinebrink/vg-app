import { Component } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('homeAnimateTrigger', [
      state('finished', style({ 
        transform: 'translateX(0)', opacity: 1
      })),
      transition('* => finished', [ 
        animate('0.4s ease-out') 
      ]),
    ]),
  ],
})
export class HomeComponent {

}
