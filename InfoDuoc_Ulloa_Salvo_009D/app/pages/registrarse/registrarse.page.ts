import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newuser = {
    email: '',
    password:'',
    repassword:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.newuser);
  }

}
