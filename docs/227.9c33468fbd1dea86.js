"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[227],{6227:(S,l,a)=>{a.r(l),a.d(l,{ReactiveModule:()=>T});var s=a(4755),i=a(5030),d=a(4412),e=a(1902),c=a(9757);function u(t,n){if(1&t&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.getFieldError("name")," ")}}function p(t,n){1&t&&(e.TgZ(0,"span",11),e._uU(1," El precio debe de ser 0 o mayor "),e.qZA())}function f(t,n){1&t&&(e.TgZ(0,"span",11),e._uU(1," Las existencias deben de ser 0 o mayor "),e.qZA())}let g=(()=>{class t{constructor(o,r){this.formBuilder=o,this.validatorsService=r,this.myForm=this.formBuilder.group({name:["",[i.kI.required,i.kI.minLength(3)]],price:[0,[i.kI.required,i.kI.min(0)]],inStorage:[0,[i.kI.required,i.kI.min(0)]]})}ngOnInit(){this.myForm.reset({price:0,inStorage:0})}isValidField(o){return this.validatorsService.isValidField(this.myForm,o)}getFieldError(o){return this.validatorsService.getFieldError(this.myForm,o)}onSave(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log(this.myForm.value),this.myForm.reset({price:0,inStorage:0}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(c.S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:28,vars:4,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del producto",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","formControlName","price","placeholder","Precio del producto",1,"form-control"],["type","number","formControlName","inStorage","placeholder","Existencias del producto",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(o,r){1&o&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: B\xe1sicos"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return r.onSave()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Producto"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,u,2,1,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Precio"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,p,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Existencias"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,f,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",0)(25,"div",1)(26,"button",10),e._uU(27," Guardar "),e.qZA()()()()()()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.myForm),e.xp6(6),e.Q6J("ngIf",r.isValidField("name")),e.xp6(6),e.Q6J("ngIf",r.isValidField("price")),e.xp6(6),e.Q6J("ngIf",r.isValidField("inStorage")))},dependencies:[s.O5,i._Y,i.Fj,i.wV,i.JJ,i.JL,i.sg,i.u],encapsulation:2}),t})();function h(t,n){1&t&&(e.TgZ(0,"span",18),e._uU(1," Debe de aceptar las condiciones de uso "),e.qZA())}let v=(()=>{class t{constructor(o,r){this.fb=o,this.validatorsService=r,this.myForm=this.fb.group({gender:["M",i.kI.required],wantNotifications:[!0,i.kI.required],termsAndConditions:[!1,i.kI.requiredTrue]}),this.person={gender:"F",wantNotifications:!0}}ngOnInit(){this.myForm.reset(this.person)}onSave(){if(this.myForm.invalid)return void this.myForm.markAllAsTouched();const{termsAndConditions:o,...r}=this.myForm.value;this.person=r,this.myForm.reset()}isValidField(o){return this.validatorsService.isValidField(this.myForm,o)}getFieldError(o){return this.validatorsService.getFieldError(this.myForm,o)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(c.S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:36,vars:2,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","formControlName","gender","value","M","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","formControlName","gender","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],[1,"form-check","form-switch","mt-2"],["type","checkbox","formControlName","wantNotifications","id","flexSwitchCheckChecked",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","formControlName","termsAndConditions","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["class","form-text text-danger",4,"ngIf"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(o,r){1&o&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: Switches"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"form",0),e.NdJ("ngSubmit",function(){return r.onSave()}),e.TgZ(4,"div",1)(5,"label",2),e._uU(6,"G\xe9nero"),e.qZA(),e.TgZ(7,"div",3)(8,"div",4),e._UZ(9,"input",5),e.TgZ(10,"label",6),e._uU(11," Masculino "),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"input",7),e.TgZ(14,"label",8),e._uU(15," Femenino "),e.qZA()()()(),e.TgZ(16,"div",1)(17,"label",2),e._uU(18,"Notificaciones"),e.qZA(),e.TgZ(19,"div",3)(20,"div",9),e._UZ(21,"input",10),e.TgZ(22,"label",11),e._uU(23,"Quiero recibir notificaciones"),e.qZA()()()(),e.TgZ(24,"div",1),e._UZ(25,"label",2),e.TgZ(26,"div",3)(27,"div",4),e._UZ(28,"input",12),e.TgZ(29,"label",13),e._uU(30," T\xe9rminos y condiciones de uso "),e.qZA()(),e.YNc(31,h,2,0,"span",14),e.qZA()(),e.TgZ(32,"div",15)(33,"div",16)(34,"button",17),e._uU(35," Guardar "),e.qZA()()()()),2&o&&(e.xp6(3),e.Q6J("formGroup",r.myForm),e.xp6(28),e.Q6J("ngIf",r.isValidField("termsAndConditions")))},dependencies:[s.O5,i._Y,i.Fj,i.Wl,i._,i.JJ,i.JL,i.sg,i.u],encapsulation:2}),t})();function Z(t,n){if(1&t&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.hij(" ",o.getFieldError("name")," ")}}function _(t,n){1&t&&(e.TgZ(0,"span",14),e._uU(1," Este campo es requerido "),e.qZA())}function F(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",15)(1,"div",6),e._UZ(2,"input",16),e.TgZ(3,"button",17),e.NdJ("click",function(){const A=e.CHM(o).index,C=e.oxw();return e.KtG(C.onDeleteFavorite(A))}),e._uU(4," Eliminar "),e.qZA()(),e.YNc(5,_,2,0,"span",5),e.qZA()}if(2&t){const o=n.index,r=e.oxw();e.xp6(2),e.Q6J("formControlName",o),e.xp6(3),e.Q6J("ngIf",r.isValidFieldInArray(r.favoriteGames,o))}}const y=[{path:"",children:[{path:"basic",component:g},{path:"dynamic",component:(()=>{class t{constructor(o,r){this.formBuilder=o,this.validatorsService=r,this.dynForm=this.formBuilder.group({name:["",[i.kI.required,i.kI.minLength(3)]],favoriteGames:this.formBuilder.array([["Metal Gear",i.kI.required],["Death Stranding",i.kI.required]])}),this.newFavorite=new i.NI("",[i.kI.required])}get favoriteGames(){return this.dynForm.get("favoriteGames")}isValidField(o){return this.validatorsService.isValidField(this.dynForm,o)}isValidFieldInArray(o,r){return this.validatorsService.isValidFieldInArray(o,r)}getFieldError(o){return this.validatorsService.getFieldError(this.dynForm,o)}onAddToFavorites(){this.newFavorite.invalid?this.newFavorite.markAllAsTouched():(this.favoriteGames.push(this.formBuilder.control(this.newFavorite.value,i.kI.required)),this.newFavorite.reset())}onDeleteFavorite(o){this.favoriteGames.removeAt(o)}onSubmit(){this.dynForm.invalid?this.dynForm.markAllAsTouched():(console.log(this.dynForm.value),this.dynForm.controls.favoriteGames=this.formBuilder.array([]),this.dynForm.reset())}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.qu),e.Y36(c.S))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:29,vars:4,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","name","placeholder","Nombre de la persona",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","favoriteGames",1,"col-sm-9"],["class","mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"],[1,"mb-1"],[1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(o,r){1&o&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: "),e.TgZ(2,"small"),e._uU(3," Din\xe1micos "),e.qZA()(),e._UZ(4,"hr"),e.TgZ(5,"form",0),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(6,"div",1)(7,"label",2),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"input",4),e.YNc(11,Z,2,1,"span",5),e.qZA()(),e.TgZ(12,"div",1)(13,"label",2),e._uU(14,"Agregar"),e.qZA(),e.TgZ(15,"div",3)(16,"div",6),e._UZ(17,"input",7),e.TgZ(18,"button",8),e.NdJ("click",function(){return r.onAddToFavorites()}),e._uU(19," Agregar favorito "),e.qZA()()()(),e.TgZ(20,"div",1)(21,"label",2),e._uU(22,"Favoritos"),e.qZA(),e.TgZ(23,"div",9),e.YNc(24,F,6,2,"div",10),e.qZA()(),e.TgZ(25,"div",11)(26,"div",12)(27,"button",13),e._uU(28," Guardar "),e.qZA()()()()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.dynForm),e.xp6(6),e.Q6J("ngIf",r.isValidField),e.xp6(6),e.Q6J("formControl",r.newFavorite),e.xp6(7),e.Q6J("ngForOf",r.favoriteGames.controls))},dependencies:[s.sg,s.O5,i._Y,i.Fj,i.JJ,i.JL,i.oH,i.sg,i.u,i.CE],encapsulation:2}),t})()},{path:"switches",component:v},{path:"**",redirectTo:"basic"}]}];let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(y),d.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,b,i.UX]}),t})()}}]);