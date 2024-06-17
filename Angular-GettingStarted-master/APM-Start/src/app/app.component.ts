import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bf-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
  `
})
export class AppComponent {
  pageTitle: string = "ADAI Product Management"
}
