import { Subject } from 'rxjs';

export class NavService {
  activeComponent = new Subject<String>();

  changeActiveComponent(component: String) {
    this.activeComponent.next(component);
  }
}
