import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      state('open', style({ 
        height: '400px', backgroundColor: '#336699' 
      })),
      state('closed', style({ 
        height: '100px', backgroundColor: 'orange' 
      })),
      transition('open => closed', [ 
        animate('0.2s ease-in') 
      ]),
      transition('closed => open', [ 
        animate('0.4s ease-out') 
      ]),
    ]),
  ],
  templateUrl: 'open-close.component.html',
  styleUrls: ['open-close.component.css']
})
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

