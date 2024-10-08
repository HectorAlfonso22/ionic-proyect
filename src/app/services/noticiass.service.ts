import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiassService {

  constructor() { }

  getCardData() {
    return [{ 
      id: 1,
      title: 'Avance de la IA',
      imageUrl: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728065362/Inteligencias-artificiales_cjhlhu.jpg',  // Reemplázalo con tu URL de imagen
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis qui voluptatibus reruNesciunt provident consequuntur reiciendis. Earum facere voluptatem laboriosam, asperiores beatae consequunturobcaecati quis assumenda adipisci error sapiente ab! Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    }];
  }

}
