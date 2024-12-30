import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-down-mobile',
  standalone: true,
  imports: [],
  templateUrl: './nav-down-mobile.component.html',
  styleUrl: './nav-down-mobile.component.css'
})
export class NavDownMobileComponent {

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
