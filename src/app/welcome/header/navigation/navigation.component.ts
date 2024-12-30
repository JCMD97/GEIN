import { Component } from '@angular/core';

@Component({
  selector: 'bar-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  public toggle: string = 'content_navigation';


  public openToggle() {

    if (this.toggle.includes('open')) {
      this.toggle = 'content_navigation';
    } else {
      this.toggle = 'content_navigation open';
    }
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}
