import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimePopular } from './anime.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private http: HttpClient) {}

  private ANIME_URI = 'https://api.enime.moe';

  public getPopularAnime() {
    return this.http.get<AnimePopular>(`${this.ANIME_URI}/popular`, {
      reportProgress: true,
    });
  }
  public searchAnime(keyword: string) {
    return this.http.get<AnimePopular>(`${this.ANIME_URI}/search/${keyword}`, {
      reportProgress: true,
    });
  }
}
