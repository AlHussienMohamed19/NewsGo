import { Component } from '@angular/core';
import { LoadingScreenService } from 'src/app/Services/loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent {
  constructor(public _LoadingScreenService: LoadingScreenService) {

  }
}
