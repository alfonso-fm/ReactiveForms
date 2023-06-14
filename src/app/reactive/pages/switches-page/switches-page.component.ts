import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  });

  public person = {
    gender: 'F',
    wantNotifications: true
  }

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService ){

  }
  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  onSave(){
    if( this.myForm.invalid ){
      this.myForm.markAllAsTouched();
      return
    }

    const { termsAndConditions, ...newPerson} = this.myForm.value;
    this.person = newPerson;

    this.myForm.reset();
  }

  isValidField(field: string): boolean | null{
    return this.validatorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null{
    return this.validatorsService.getFieldError(this.myForm, field);
  }

}
