import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonAvatar,
  IonRow,
  IonList,
  IonItem,
  IonButton,
  IonCol,
  IonMenuButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonAvatar,
    IonRow,
    IonList,
    IonItem,
    IonCol,
    IonButton,
    IonMenuButton,
    RouterModule,
  ],
})
export class HomePage {
  constructor() {}
}
