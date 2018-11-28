import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { NavService } from '../_service/nav.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {
  activeComponent: String;
  private subscription1: Subscription;
  private subscription2: Subscription;
  positions = [0, 0, 0];

  constructor(private navService: NavService, private router: Router) { }

  ngOnInit() {
    this.activeComponent = 'About';
    this.subscription1 = this.navService.activeComponent.subscribe(
      (component: String) => {
        this.activeComponent = component;
      }
    );
    this.subscription2 = this.navService.breakPoints.subscribe(
      (points: []) => {
        this.positions = points;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  navigateTo(component: string) {
    this.router.navigate(['/home'], {fragment: component});
    if (component === 'Projects') {
      window.scrollTo(0, this.positions[1]);
    } else if (component === 'Contact') {
      window.scrollTo(0, this.positions[2]);
    } else {
      window.scrollTo(0, this.positions[0]);
    }
  }
}
