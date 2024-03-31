// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import type { ApplicationConfig } from '@angular/core';
import { appRoutes } from './app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideAnimations()],
};
