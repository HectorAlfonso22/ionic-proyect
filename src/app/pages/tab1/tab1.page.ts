import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NoticiassService } from 'src/app/services/noticiass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCardTitle, IonCardContent, IonCardHeader, IonCard, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page implements OnInit{
  cardData: any[] = [];
  constructor(private noticiassService: NoticiassService, private router: Router) {}
  ngOnInit() {
    // Obtener los datos de la card
    this.cargarNoticias();
    console.log(this.cardData)
    
  }
  cargarNoticias(){
    this.cardData = this.noticiassService.getCardData();
  }
    // Navegar a la página de detalles
    goToDetails(card: any) {
      // Suponemos que el objeto card tiene un campo 'id'
      this.router.navigate(['/detalle-noticia', card.id]);
    }



}

