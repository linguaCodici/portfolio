import { Component, HostListener } from '@angular/core';
import { NavService } from './_service/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private navService: NavService) {}

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    console.log('Scroll Event', window.pageYOffset);
    if (window.pageYOffset <= 250) {
      this.navService.changeActiveComponent('About');
    } else if (window.pageYOffset > 250 && window.pageYOffset < 1200) {
      this.navService.changeActiveComponent('Projects');
    } else {
      this.navService.changeActiveComponent('Contact');
    }
  }
}
