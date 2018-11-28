import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { NavService } from '../_service/nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {
  activeComponent: String;
  private subscription: Subscription;

  constructor(private navService: NavService) { }

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
}
