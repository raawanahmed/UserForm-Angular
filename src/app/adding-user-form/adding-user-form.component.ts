import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-adding-user-form',
  templateUrl: './adding-user-form.component.html',
  styleUrls: ['./adding-user-form.component.css'],
})
export class AddingUserFormComponent {
  @Input() onAddUser: any;
  formData = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required, Validators.minLength(4)]),
    city: new FormControl('', [Validators.required, Validators.minLength(5)]),
    orderTotal: new FormControl('', [Validators.required]),
  });

  onSubmit = () => {
    this.onAddUser({
      firstName: this.formData.value.firstName,
      lastName: this.formData.value.lastName,
      address: this.formData.value.address,
      city: this.formData.value.city,
      state: this.formData.value.state,
      orderTotal: this.formData.value.orderTotal,
    });
  };
}
