import { matchValidator } from './matchValidator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  mensagens = {
    usuario: [{tipo:'required', mensagem: 'O campo Usuário é obrigatório!'}],

    password: [{tipo:'required', mensagem:'O campo Password é obrigatório!'},
               {tipo:'minlength', mensagem:'O password deve ter ao menos 8 caracteres'},
               {tipo:'pattern', mensagem:'O password deve conter ao menos um número, uma letra maiúscula, uma letra minúscula e um caracter especial!'}],
    
    confirmPassword: [{tipo:'required', mensagem:'A confirmação de Password é obrigatória!'},
                      {tipo:'comparacao', mensagem:'O Password e sua confirmação devem ser iguais!'}]
              }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formLogin = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.,=+-])[A-Za-z\d$@$!%*?&].{8,}')])],
      confirmPassword:['', Validators.required],
    },{
      validator:matchValidator('password','confirmPassword')
    });
   }


  ngOnInit(): void {
    }

    checkValidation(){
      if(this.formLogin.valid==true){
       this.addUserStorage()
        this.router.navigate (['/leads'])
      }
    }

    addUserStorage(){
      let user:any = Object.values(this.formLogin.value); user.pop()
      window.localStorage.setItem(user[0].toString(), user[1].toString())
    }
}