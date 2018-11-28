import { Subject } from 'rxjs';

export class NavService {
  activeComponent = new Subject<String>();
  routerComponent = new Subject<String>();
  breakPoints = new Subject<number[]>();

  changeActiveComponent(component: String) {
    this.activeComponent.next(component);
  }

  activateBP(bp1: number, bp2: number, bp3: number) {
    this.breakPoints.next([bp1, bp2, bp3]);
  }

  jumpToComponent(component: String) {
    this.routerComponent.next(component);
  }
}
