import { Subject } from 'rxjs';

export class NavService {
  activeComponent = new Subject<String>();
  routerComponent = new Subject<String>();

  changeActiveComponent(component: String) {
    this.activeComponent.next(component);
  }

  jumpToComponent(component: String) {
    this.routerComponent.next(component);
  }
}
