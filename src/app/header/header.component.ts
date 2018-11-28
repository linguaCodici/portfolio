import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
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
  private subscription: Subscription;

  constructor(private navService: NavService, private router: Router) { }

  ngOnInit() {
    this.activeComponent = 'About';
    this.subscription = this.navService.activeComponent.subscribe(
      (component: String) => {
        this.activeComponent = component;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigateTo(component: string) {
    this.router.navigate(['/home'], {fragment: component});
  }
}
