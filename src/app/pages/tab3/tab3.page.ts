import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCard, IonCardContent, IonCardTitle, IonFooter, IonButton, IonIcon, IonButtons, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true, 
  imports: [IonCol, IonRow, IonGrid, IonButtons, IonIcon, IonButton, IonFooter, IonCardTitle, IonCardContent, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule],
})
export class Tab3Page {
  constructor() {}
  noticias = [
    {
      title: 'ChatGPT-4: Un salto cuántico en la inteligencia artificial',
      description: 'OpenAI ha lanzado ChatGPT-4, la última versión de su popular chatbot. Esta nueva iteración presenta mejoras significativas en la comprensión del lenguaje natural, la generación de texto creativo y la capacidad de resolver problemas complejos. ChatGPT-4 es capaz de mantener conversaciones más naturales y coherentes, lo que lo convierte en una herramienta aún más poderosa para diversas aplicaciones, desde la asistencia al cliente hasta la creación de contenido.',
      image: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728601478/cerebro_bdwaaz.jpg'
    },
    {
      title: 'El metaverso se consolida: Facebook se convierte en Meta',
      description: 'Facebook ha anunciado un cambio radical en su identidad corporativa, pasando a llamarse Meta. Este cambio refleja la creciente inversión de la compañía en el desarrollo del metaverso, un universo virtual interconectado donde los usuarios podrán trabajar, jugar y socializar. Meta está desarrollando hardware y software para crear experiencias inmersivas en el metaverso, como cascos de realidad virtual y plataformas de creación de mundos virtuales.',
      image: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728601701/rv_gyx8vs.jpg'
    },
    {
      title: 'Los vehículos autónomos cada vez más cerca de ser una realidad',
      description: 'Las empresas tecnológicas y automotrices están avanzando a pasos agigantados en el desarrollo de vehículos autónomos. Empresas como Waymo y Tesla están realizando pruebas en entornos urbanos y suburbanos, y se espera que los coches sin conductor estén disponibles comercialmente en un futuro cercano. Los vehículos autónomos tienen el potencial de revolucionar la movilidad, reducir los accidentes de tráfico y mejorar la eficiencia energética.',
      image: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728601877/tesla_yiyjhv.jpg'
    },
    {
      title: 'La inteligencia artificial genera arte: una nueva forma de expresión creativa',
      description: 'La inteligencia artificial está demostrando ser una herramienta poderosa para la creación artística. Algoritmos avanzados pueden generar imágenes, música y poesía de alta calidad, desafiando la noción tradicional de lo que significa ser un artista. Esta nueva forma de expresión creativa está generando un debate sobre el papel de la creatividad humana y la originalidad en el arte.',
      image: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728601980/pintura_svzphs.jpg'
    },
    {
      title: 'La ciberseguridad se convierte en una prioridad global',
      description: 'Los ciberataques se han vuelto cada vez más frecuentes y sofisticados, lo que ha puesto de manifiesto la necesidad de fortalecer la ciberseguridad. Gobiernos, empresas y particulares están invirtiendo en soluciones de seguridad para proteger sus datos y sistemas. La pandemia del COVID-19 ha acelerado la digitalización de muchos aspectos de la vida, lo que ha aumentado la superficie de ataque para los cibercriminales.',
      image: 'https://res.cloudinary.com/dpv9jzbfs/image/upload/v1728602098/proteccion-de-datos-personales-e_lxjrkn.jpg'
    }
  ];

  

}

