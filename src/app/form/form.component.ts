import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  emailCtrl = new FormControl('',
    [Validators.required,
    Validators.maxLength(50),
    Validators.minLength(10)]);

  constructor() {

  }

  ngOnInit(): void {
    this.emailCtrl.valueChanges
      .pipe(debounceTime(350)).subscribe(val => {
        console.log(val);
      })
  }

  /**
   * 
   * @param event 
   */
  getEmail(event) {
    event.preventDefault();
    alert(this.emailCtrl.value);
  }
}
