import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
 
@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  form;  
  constructor(private auth: AuthService, private fb: FormBuilder) {
        this.form=fb.group({
            email: ['', [Validators.required,Validators.email]],
            password: ['', Validators.required]
        });
   }

   register()
   {
       console.log(this.form);
   }

}