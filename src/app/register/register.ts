import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/* Angular Material Modules */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

/* NEW MATERIAL COMPONENTS */
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatButtonModule,

    // NEW
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class RegisterComponent {

  // Existing Data Model
  userName: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  address: string = '';
  birthDate!: Date;
  angularSkillLevel: number = 5;
  minSkillLevel: number = 1;
  maxSkillLevel: number = 10;
  submitted: boolean = false;

  // NEW PROPERTIES
  country: string = '';
  termsAccepted: boolean = false;
  countries: string[] = ['Philippines', 'Japan', 'United States', 'Canada', 'Australia'];

  // Reactive Form
  formdata = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    gender: new FormControl('', Validators.required),
    birthDate: new FormControl(null, Validators.required),
    address: new FormControl(''),
    angularSkillLevel: new FormControl(5),

    // NEW CONTROLS
    country: new FormControl('', Validators.required),
    termsAccepted: new FormControl(false, Validators.requiredTrue)
  });

  onClickSubmit(data: any) {
    this.submitted = true;

    if (this.formdata.valid) {
      this.userName = data.userName;
      this.email = data.email;
      this.password = data.password;
      this.gender = data.gender;
      this.birthDate = data.birthDate;
      this.address = data.address;
      this.angularSkillLevel = data.angularSkillLevel;
      this.country = data.country;
      this.termsAccepted = data.termsAccepted;

      console.log("Registration Successful!", this.formdata.value);
    } else {
      console.log("Form is invalid!");
    }
  }
}
