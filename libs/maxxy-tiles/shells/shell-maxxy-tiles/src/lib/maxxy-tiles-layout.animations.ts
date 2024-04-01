// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { RouteAnimationBuilder } from "./route-animation-builder/route-animation.builder";

export const slideInAnimation = new RouteAnimationBuilder().name('routeAnimations').build();

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