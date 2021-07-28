import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custumers',
  templateUrl: './custumers.page.html',
  styleUrls: ['./custumers.page.scss'],
})
export class CustumersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  IraCustomer(){
    this.router.navigate(['/home']);
  }

}
