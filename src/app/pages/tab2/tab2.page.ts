import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonChip, IonAvatar, IonLabel, IonItem, IonList, IonText, IonItemGroup, IonItemDivider, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonItemOption, IonItemOptions, IonItemSliding, IonItemDivider, IonItemGroup, IonText, IonList, IonItem, IonLabel, IonAvatar, IonChip, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {

  constructor() {}

}
