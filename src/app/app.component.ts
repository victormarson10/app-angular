import { Component } from '@angular/core';
import { CheckSampleComponent } from './check-sample/check-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life-cycle';
  isAliveCheckSample: boolean = true;

  disposeCheckSample(): void {
    this.isAliveCheckSample = false;
  }

  comeBackCheckSample(): void {
    this.isAliveCheckSample = true;
  }

  teste = new CheckSampleComponent();




}
