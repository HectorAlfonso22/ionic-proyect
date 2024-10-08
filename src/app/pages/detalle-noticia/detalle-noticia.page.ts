import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.page.html',
  styleUrls: ['./detalle-noticia.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DetalleNoticiaPage implements OnInit {

  cardId: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cardId = this.route.snapshot.paramMap.get('id');
    
    // Aquí puedes usar el cardId para cargar detalles adicionales de la card
    console.log('Card ID:', this.cardId);
  }

}
