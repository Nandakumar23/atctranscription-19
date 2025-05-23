import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { environment } from './environments/environment';
import { getFirestore } from 'firebase/firestore';


const app = initializeApp(environment.firebase);
const firestore = getFirestore(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
