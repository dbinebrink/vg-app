import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ 
      position: 'fixed', 
      width: '40%', 
      zIndex: 2 
    }), { optional: true }),
    // group block executes in parallel
    group([
      query(':enter', [
        style({ 
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate('0.5s ease-out', style({ 
          transform: 'translateX(0%)',
          opacity: 1
        }))
      ], { optional: true }),
      query(':leave', [
        style({ 
          transform: 'translateX(0%)',
          opacity: 0.0
        }),
        animate('0.5s ease-out', style({ 
          transform: 'translateX(10%)',
          opacity: 0
        }))
      ], { optional: true })
    ])
  ])
]);
