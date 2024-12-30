import { Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-list-services',
  standalone: true,
  imports: [],
  templateUrl: './list-services.component.html',
  styleUrl: './list-services.component.css'
})
export class ListServicesComponent implements OnDestroy {

  public tools = [
    {
      icon: 'psychology',
      text: 'Asesoría e intervención psicosocial y prevención de acoso laboral'
    },
    {
      icon: 'build_circle',
      text: 'Aplicación de batería de riesgo psicosocial'
    },
    {
      icon: 'badge',
      text: 'Análisis de puesto de trabajo con énfasis psicosocial'
    },
    {
      icon: 'stethoscope',
      text: 'Concepto para la calificación de origen de patologías'
    },
    {
      icon: 'prescriptions',
      text: 'Exámenes médicos ocupacionales y Programas de Vigilancia Epidemiológica'
    },
    {
      icon: 'work_alert',
      text: 'Acompañamiento empresarial en la prevención de la accidentalidad laboral'
    },
    {
      icon: 'view_list',
      text: 'Diseño de profesiogramas'
    },
    {
      icon: 'work_history',
      text: 'Certificación laboral para horas extras'
    },
    {
      icon: 'school',
      text: 'Plataforma de Educación Virtual.'
    },
    {
      icon: 'work_update',
      text: 'Diseño de estrategias formativas de acuerdo con las necesidades de su empresa'
    },
    {
      icon: 'stress_management',
      text: 'Talleres vivenciales para el manejo del estrés'
    },
    {
      icon: 'cognition',
      text: 'Seminarios de actualización en salud mental'
    },
  ]

  public imgRelations = [
    {
      texto: 'Diseño de estrategias formativas de acuerdo con las necesidades de su empresa.',
      img: 'img/first-img-service.webp'
    },
    {
      texto: 'Talleres para el manejo del estrés.',
      img: 'img/second-img-service.webp'
    },
    {
      texto: 'Seminarios de actualización en salud mental',
      img: 'img/third-img-service.webp'
    },
  ];

  public currentIndex = 0;
  private intervalId: any;

  constructor() {
    this.startAutoSlide();
    this.startAutoSlide_2();
  }

  ngOnDestroy(): void {
    this.clearInterval();
    this.clearInterval_2();
  }

  private startAutoSlide(): void {
    this.clearInterval();
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imgRelations.length;
    }, 3000);
  }

  public changeSlide(index: number): void {
    this.currentIndex = index;
    this.startAutoSlide();
  }

  private clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }



  public imgRelations_2 = [
    {
      texto: 'Preparación para auditorías en ISO 45003:2021.',
      img: 'img/third-iso-service.webp'
    },
    {
      texto: 'Pruebas psicológicas y de apoyo BASC.',
      img: 'img/third-psi-service.webp'
    },
    {
      texto: 'Elaboración de matriz de perfil de cargo',
      img: 'img/third-matriz-service.webp'
    },
  ];


  public currentIndex_2 = 0;
  private intervalId_2: any;


  private startAutoSlide_2(): void {
    this.clearInterval_2();
    this.intervalId_2 = setInterval(() => {
      this.currentIndex_2 = (this.currentIndex_2 + 1) % this.imgRelations_2.length;
    }, 3000);
  }

  public changeSlide_2(index: number): void {
    this.currentIndex_2 = index;
    this.startAutoSlide_2();
  }


  private clearInterval_2(): void {
    if (this.intervalId_2) {
      clearInterval(this.intervalId_2);
      this.intervalId_2 = null;
    }
  }


}
