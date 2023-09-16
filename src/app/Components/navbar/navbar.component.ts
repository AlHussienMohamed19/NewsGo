import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavServiceService } from 'src/app/Services/nav-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public sideNavStatue = new BehaviorSubject<boolean>(false);

  constructor(private navService: NavServiceService) {
    console.log("Constructor " + this.sideNavStatue.getValue());
  }


  triggerSideNav() {
    this.sideNavStatue.next(!this.sideNavStatue.getValue());
    console.log(this.sideNavStatue.getValue());
    // console.log(this.sideNavStatue.getValue());
    // this.navService.sideNavBarButton.emit(this.sideNavStatue.getValue());
    this.navService.openAndCloseBtn.next(this.sideNavStatue.getValue());
  }
}
