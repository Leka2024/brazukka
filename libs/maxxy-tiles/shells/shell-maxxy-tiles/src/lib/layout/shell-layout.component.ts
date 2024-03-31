// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { ChangeDetectionStrategy, Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'brazukka-shell-layout',
  templateUrl: './shell-layout.component.html',
  styleUrl: './shell-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellLayoutComponent {

  constructor(private contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
