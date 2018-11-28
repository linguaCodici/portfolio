import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    console.log('Scroll Event', window.pageYOffset);
  }
}
