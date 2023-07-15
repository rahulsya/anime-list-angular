import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '../layout/footer/footer.component'
import {NavbarComponent} from '../layout/navbar/navbar.component'
import { ButtonComponent } from '../layout/button/button.component';
import { AnimeCardComponent } from '../layout/anime-card/anime-card.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,ButtonComponent,AnimeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,FooterComponent,ButtonComponent,AnimeCardComponent],
})
export class SharedModule { }
