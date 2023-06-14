import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  public dynForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.formBuilder.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  });

  public newFavorite:FormControl = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService ){}

  get favoriteGames(){
    return this.dynForm.get('favoriteGames') as FormArray;
  }

  isValidField(field: string): boolean | null{
    return this.validatorsService.isValidField(this.dynForm, field);
  }

  isValidFieldInArray(formArray: FormArray, index: number){
    return this.validatorsService.isValidFieldInArray(formArray,index);
  }

  getFieldError(field: string): string | null{
    return this.validatorsService.getFieldError(this.dynForm, field);
  }

  onAddToFavorites(): void{

    if ( this.newFavorite.invalid ){
      this.newFavorite.markAllAsTouched();
      return;
    }
    const newGame = this.newFavorite.value;

    this.favoriteGames.push(
      this.formBuilder.control( newGame, Validators.required )
    );

    this.newFavorite.reset();
  }

  onDeleteFavorite(index:number){
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void{
    if ( this.dynForm.invalid ){
      this.dynForm.markAllAsTouched();
      return;
    }

    console.log(this.dynForm.value);

    (this.dynForm.controls['favoriteGames'] as FormArray) = this.formBuilder.array([]);
    this.dynForm.reset();
  }

}
