import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Custumers', url: '/custumers', icon: 'person' },
    { title: 'Citios', url: '/citios', icon: 'location' },
  ];
  constructor() { }
}
