// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
        import('@brazukka/maxxy-tiles/shell-maxxy-tiles').then(
            module => module.ShellMaxxyTilesModule,
        ),
  }
];
