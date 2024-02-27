import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonGrid,
  IonAvatar,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRow,
  IonCol,
  IonList,
  IonIcon,
  IonItem,
  IonMenuToggle,
  IonLabel,
  IonFooter,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonGrid,
    IonAvatar,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRow,
    IonCol,
    IonList,
    IonIcon,
    IonItem,
    IonLabel,
    IonFooter,
    IonMenuToggle,
    RouterLink,
    RouterLinkActive,
  ],
})
export class AppComponent {
  constructor() {}
}
