import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, { 
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: '',
        component: AppComponent,
      },
    ]),
  ],
})
