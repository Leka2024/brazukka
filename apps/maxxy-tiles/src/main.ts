// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
