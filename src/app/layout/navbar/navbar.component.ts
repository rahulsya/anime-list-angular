import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  buttonTitle:string="Download"
  menu_list:string[] = [
    'Top',
    'For every one',
    'Feature',
    'Preview',
    'License'
  ]

  actionDownload(value:string):void{
    console.log(`the value is -- ${value}`);
  }
}
