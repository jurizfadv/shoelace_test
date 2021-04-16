import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shoelace';

  public parentVariable: string | undefined;

  setDataFromChild(value:string) {
    this.parentVariable = value
  }
}
