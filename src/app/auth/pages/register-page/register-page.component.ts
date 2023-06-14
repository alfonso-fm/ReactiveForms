import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent implements OnInit {
  public myForm : FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern) ], [ this.emailValidator ]],
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  },{
    validators: [
      this.validatorsService.isFieldOneEqualsFieldTwo('password', 'password2')
    ]
  });

  public newUser = {
    name: '',
    email:'',
    username:'',
    password: '',
    password2:''};

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidator: EmailValidator){}

  ngOnInit(): void {
    this.myForm.reset(this.newUser);
  }

  isValidField( field: string ) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset(this.newUser);
  }
}
