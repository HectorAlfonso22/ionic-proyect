import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NoticiassService } from 'src/app/services/noticiass.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, RouterModule,CommonModule],
})
export class Tab1Page implements OnInit{
  cardData: any[] = [];
  constructor(private noticiassService: NoticiassService, private router: Router) {}
  ngOnInit() {
    // Obtener los datos de la card
    this.cardData = this.noticiassService.getCardData(); // Reutilizamos el servicio para obtener los datos
    
  }
  cargarNoticias(){
    this.cardData = this.noticiassService.getCardData();
  }
  
  trackById(index: number, item: any): number {
    return item.id;
  }



}

