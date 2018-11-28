import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { NavService } from './_service/nav.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  private fragment: string;

  constructor(private navService: NavService, private route: ActivatedRoute) {}

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

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
    } catch (e) { }
  }
}
