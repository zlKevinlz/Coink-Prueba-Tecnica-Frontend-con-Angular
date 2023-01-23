import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('coink@gmail.com', [Validators.email, Validators.required ]),
    password: new FormControl('12345', [Validators.required, Validators.min(3) ])
  });
  
  hide = true;

  alert = false;
  
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  get emailInput() { return this.loginForm.get('email'); }
  get passwordInput() { return this.loginForm.get('password'); } 

  login(){
    if(this.loginForm.get('email')?.value == 'coink@gmail.com' && this.loginForm.get('password')?.value == '12345'){
      this._router.navigate([`coink/home`]);
    }else{
      this.alert = true;

      setTimeout ( ()=>{
        this.alert = false;
      }, 3000)
    }
  }

}
