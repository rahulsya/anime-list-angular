import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../layout/footer/footer.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { ButtonComponent } from '../layout/button/button.component';
import { AnimeCardComponent } from '../layout/anime-card/anime-card.component';
import { InputComponent } from '../layout/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ButtonComponent,
    AnimeCardComponent,
    InputComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    AnimeCardComponent,
    InputComponent,
  ],
})
export class SharedModule {}
