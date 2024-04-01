// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { AnimationTriggerMetadata, animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation: AnimationTriggerMetadata =
  trigger('routeAnimations', [
    // transition('* <=> *', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ], { optional: true }),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(':leave', [
    //       animate('300ms ease-out', style({ left: '100%' }))
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ], { optional: true }),
    //   ]),
    // ]),
    transition('* <=> *', [
      group([
        // Animation for leaving element
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('3.4s ease-in-out', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
    
        // Animation for entering element after leave animation completes
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('3.4s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
      ])
    ])

    // transition('* <=> *', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ], { optional: true }),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ], { optional: true }),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%', opacity: 0 }))
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ], { optional: true }),
    //     query('@*', animateChild(), { optional: true })
    //   ]),
    // ])
  ]);

  // export const slideInAnimation: AnimationTriggerMetadata =
  // trigger('routeAnimations', [
  //   transition('* <=> *', [
  //     group([
  //       query(':enter', [
  //         style({transform: 'translateX({{offsetEnter}}%)'}),
  //         animate('1.4s ease-in-out', style({transform: 'translateX(0%)'}))
  //       ], {optional: true}),
  //       query(':leave', [
  //         style({transform: 'translateX(0%)'}),
  //         animate('1.4s ease-in-out', style({transform: 'translateX({{offsetLeave}}%)'}))
  //       ], {optional: true}),
  //     ])
  //   ]),
  // ]);