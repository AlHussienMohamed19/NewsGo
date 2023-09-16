import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {
  // public sideNavBarButton = new EventEmitter<boolean>();
  public openAndCloseBtn = new Subject<boolean>();

  constructor() { }


}
