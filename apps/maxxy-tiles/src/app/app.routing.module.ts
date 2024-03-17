// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                {
                    path: '',
                    loadChildren: () =>
                        import('@brazukka/maxxy-tiles/shell-maxxy-tiles').then(
                            module => module.ShellMaxxyTilesModule,
                        ),
                },
            ],
            {
                paramsInheritanceStrategy: 'always',
                scrollPositionRestoration: 'enabled',
                scrollOffset: [0, 0],
                anchorScrolling: 'enabled',
            },
        ),
    ],
    exports: [RouterModule],
})
export class AppRouteringModule {}
