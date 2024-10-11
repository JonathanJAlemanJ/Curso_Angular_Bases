import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Esta linea es para configurar la aplicacion (web) para diferentes plataformas
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
