import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public selectedIndex: number = 0;

  public changeSlide(index: number): void {
    this.selectedIndex = index;
  }

}
