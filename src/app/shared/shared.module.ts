import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '../layout/footer/footer.component'
import {NavbarComponent} from '../layout/navbar/navbar.component'
import { ButtonComponent } from '../layout/button/button.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,FooterComponent,ButtonComponent],
})
export class SharedModule { }
