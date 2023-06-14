import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService ){}

  ngOnInit(): void {
    this.myForm.reset({price:0, inStorage: 0});
  }

  isValidField(field: string): boolean | null{
    return this.validatorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string): string | null{
    return this.validatorsService.getFieldError(this.myForm, field);
  }

  public myForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [ Validators.required, Validators.min(0)]],
    inStorage: [0,  [ Validators.required, Validators.min(0)]],
  });

  onSave(): void{
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({price:0, inStorage: 0});
  }
}
