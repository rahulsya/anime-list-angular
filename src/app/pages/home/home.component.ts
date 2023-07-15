import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/services/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  animeList: Anime[] = [];
  isLoading: boolean = false;

  constructor(private anime: AnimeService) {}

  ngOnInit(): void {
    this.loadPopularAnime();
  }

  loadPopularAnime() {
    this.isLoading = true;
    this.anime.getPopularAnime().subscribe({
      next: (response) => {
        this.animeList = response.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
}
