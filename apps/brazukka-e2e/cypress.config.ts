import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run brazukka:serve:development',
        production: 'nx run brazukka:serve:production',
      },
      ciWebServerCommand: 'nx run brazukka:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
