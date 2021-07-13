import { Component } from '@angular/core';

// services
import { PubsubService } from './services/pub-sub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Veg-Cart';

  constructor(public pubsubSvc: PubsubService) {

  }
}
