import { Component } from '@angular/core';

export interface dataType {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  orderTotal: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstApp';

  userData: dataType[] = [
    {
      firstName: 'rawan',
      lastName: 'ahmed',
      address: '8 El Saada Street',
      city: 'Cairo',
      state: 'Cairo',
      orderTotal: 1100,
    },
  ];

  onAddUser = (user: dataType) => {
    this.userData.push({
      ...user,
    });
  };
}
