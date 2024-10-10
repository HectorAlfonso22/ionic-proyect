import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiassService {

  private cardData: any[] = [
    { 
      id: 1,
      title: 'Avance de la IA',
      imageUrl: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728065362/Inteligencias-artificiales_cjhlhu.jpg',  
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis qui voluptatibus reruNesciunt provident consequuntur reiciendis. Earum facere voluptatem laboriosam, asperiores beatae consequunturobcaecati quis assumenda adipisci error sapiente ab! Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ];
  constructor() { }
 // Obtener todas las cards
  getCardData() {
    return this.cardData;
  }
  // Obtener los detalles de una card por ID
  getCardById(id: number) {
    return this.cardData.find(card => card.id === id);
  }

}
