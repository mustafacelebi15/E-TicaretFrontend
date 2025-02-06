import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // <-- Bunu ekle

bootstrapApplication(AppComponent, {
  ...appConfig, // Mevcut yapılandırmayı koru
  providers: [
    ...appConfig.providers, // appConfig içindeki mevcut sağlayıcıları ekle
    provideHttpClient() // HTTP istemcisini ekle
  ]
})
  .catch((err) => console.error(err));
