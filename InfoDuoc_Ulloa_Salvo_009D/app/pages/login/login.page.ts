import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private toastController : ToastController) {}

  ngOnInit() {
  }

  async MensajeIngreso(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Ingresado correctamente',
      duration: 1500,
      position: position,
      icon: 'checkmark-circle',
      color: 'success'
    });

    await toast.present();
  }

  usuario = {
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
