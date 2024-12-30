import { Component } from '@angular/core';
import { HomePageComponent } from './welcome/home-page/home-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GEIN';
}
