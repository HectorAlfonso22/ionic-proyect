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
      description: 'La Inteligencia Artificial ha experimentado un crecimiento exponencial en los últimos años, transformando la forma en que vivimos y trabajamos. Uno de los avances más notables es el desarrollo de modelos de lenguaje de gran tamaño, como GPT-4, capaces de generar texto de alta calidad, traducir idiomas, escribir diferentes tipos de contenido creativo y responder a tus preguntas de manera informativa. Estos modelos están impulsando una nueva era de interacción humano-computadora, donde las máquinas pueden comprender y responder al lenguaje natural de una manera cada vez más sofisticada.\nOtro área en la que la IA está haciendo grandes avances es la visión por computadora. Los algoritmos de IA ahora pueden analizar imágenes y videos con una precisión asombrosa, identificando objetos, personas y escenas con un nivel de detalle que antes era inimaginable. Esta tecnología tiene aplicaciones en una amplia gama de campos, desde la conducción autónoma hasta el diagnóstico médico.\nLa IA también está revolucionando el campo de la robótica. Los robots equipados con IA son cada vez más capaces de realizar tareas complejas y adaptarse a entornos cambiantes. Desde robots industriales que ensamblan productos en fábricas hasta robots asistenciales que ayudan a personas mayores, la robótica impulsada por IA está transformando la forma en que fabricamos y vivimos.\nSin embargo, a medida que la IA continúa avanzando, también surgen nuevos desafíos. Uno de los principales desafíos es garantizar que la IA se desarrolle y utilice de manera ética y responsable. Es fundamental abordar cuestiones como la privacidad de los datos, el sesgo algorítmico y el potencial de la IA para desplazar empleos.\nEn resumen, la Inteligencia Artificial está avanzando a un ritmo acelerado y transformando múltiples aspectos de nuestra sociedad. Si bien existen desafíos que deben abordarse, el potencial de la IA para mejorar nuestras vidas es inmenso. Es importante mantenerse al día con los últimos avances en este campo y participar en el debate sobre el futuro de la IA.'
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
