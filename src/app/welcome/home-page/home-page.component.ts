import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ClientsComponent } from '../clients/clients.component';
import { ContactComponent } from '../contact-footer/contact.component';
import { HeaderComponent } from '../header/header.component';
import { ListServicesComponent } from '../list-services/list-services.component';
import { NavDownMobileComponent } from '../nav-down-mobile/nav-down-mobile.component';
import { PerformanceComponent } from '../performance/performance.component';
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
  selector: 'gein-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    PresentationComponent,
    PresentationComponent,
    PerformanceComponent,
    ListServicesComponent,
    AboutComponent,
    ClientsComponent,
    ContactComponent,
    NavDownMobileComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
