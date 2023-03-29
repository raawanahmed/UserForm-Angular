import { Component, Input } from '@angular/core';
import { dataType } from '../app.component';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent {
  @Input() userData: dataType[] = [];
  filteredList: dataType[] = [];

  ngOnInit(): void {
    this.filteredList = this.userData;
  }
  onKey = (event: any) => {
    console.log(event.target.value);
    this.filterUsers(event.target.value);
  };

  filterUsers = (searchItem: string) => {
    if (searchItem.length < 1) {
      this.filteredList = this.userData;
      return;
    }
    this.filteredList = this.userData.filter((user: dataType) => {
      return (
        user.firstName.toLowerCase().includes(searchItem) ||
        user.lastName.toLowerCase().includes(searchItem) ||
        user.address.toLowerCase().includes(searchItem) ||
        user.state.toLowerCase().includes(searchItem) ||
        user.city.toLowerCase().includes(searchItem)
      );
    });
  };
}
