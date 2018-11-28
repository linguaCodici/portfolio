import { Component, HostListener, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { NavService } from './_service/nav.service';
import { ActivatedRoute } from '@angular/router';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  @ViewChild(ContentComponent) contentComp: ContentComponent;

  constructor(private navService: NavService, private route: ActivatedRoute) {}

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    const bp_1 = (this.contentComp.a_pos + this.contentComp.p_pos) / 2;
    const bp_2 = (this.contentComp.c_pos + this.contentComp.p_pos) / 2;
    if (window.pageYOffset <= bp_1) {
      this.navService.changeActiveComponent('About');
    } else if (window.pageYOffset > bp_1 && window.pageYOffset < bp_2) {
      this.navService.changeActiveComponent('Projects');
    } else {
      this.navService.changeActiveComponent('Contact');
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.contentComp.a_pos);
    // console.log(this.contentComp.p_pos);
    // console.log(this.contentComp.c_pos);
    this.navService.activateBP(this.contentComp.a_pos, this.contentComp.p_pos, this.contentComp.c_pos);
  }
}
