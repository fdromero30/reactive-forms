import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  /**
   * 
   */
  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(10), Validators.email]],
      name: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(10)]],
      password: ['', [Validators.required], []]
    });

    this.form.valueChanges
      .pipe(debounceTime(500)).subscribe(val => {
        console.log(val);
      });
  }

  /**
   * 
   * @param _event 
   */
  saveForm(_event) {
    event.preventDefault();
    if (this.form.valid) {
      alert('saved');
    }
  }
}
