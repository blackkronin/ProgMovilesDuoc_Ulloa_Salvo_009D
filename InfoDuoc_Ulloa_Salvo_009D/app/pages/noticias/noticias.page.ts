import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  desplegarMenu(){
    this.menu.open('first');
  }

}
