import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Anime } from 'src/app/services/anime.interface';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.css'],
})
export class AnimeCardComponent {
  @Input() anime!: Anime;
  @Input() selctedAnime!: boolean;
  @Input() type!: 'default' | 'list-view';
  @Output() selectAnim = new EventEmitter();

  selectAnime(anim: Anime) {
    this.selectAnim.emit(anim);
  }
}
