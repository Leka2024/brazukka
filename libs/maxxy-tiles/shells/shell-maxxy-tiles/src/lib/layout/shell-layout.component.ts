// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { ChangeDetectionStrategy, Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ActivatedRoute, ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../maxxy-tiles-layout.animations';

@Component({
  selector: 'brazukka-shell-layout',
  templateUrl: './shell-layout.component.html',
  styleUrl: './shell-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    slideInAnimation
  ]
})
export class ShellLayoutComponent {

  // constructor(private contexts: ChildrenOutletContexts) {
  // }

  // getRouteAnimationData() {
  //   const animations =  this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  //   console.log('animation => ', animations);
  //   return {
  //     value: 1,
  //     params: {
  //       offsetEnter: 0 > 1 ? 100 : 100,
  //       offsetLeave: 0 > 1 ? -100 : -100
  //     }
  //   }
  // }

  // getRouteAnimationData(outlet: RouterOutlet) {
  //   // Access the ActivatedRoute snapshot to get the data property of the current route
  //   const animationData = this.contexts.getContext('primary')?.route?.snapshot?.data?;

  //   // Check if animationData exists and return the animation value if available
  //   return animationData ? animationData['animation'] : '';
  // }

  constructor(private activatedRoute: ActivatedRoute) {}

  // eslint-disable-next-line jsdoc/require-jsdoc
  getRouteAnimationData(outlet: RouterOutlet) {
    // Access the ActivatedRoute snapshot to get the data property of the current route
    const animationData = this.activatedRoute.snapshot.firstChild?.data;

    // Check if animationData exists and return the animation value if available
    return animationData ? animationData['animation'] : '';
  }
}
