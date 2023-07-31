import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/services/anime.interface';
import { AnimeService } from 'src/app/services/anime.service';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  animeList: Anime[] = [];
  isLoading: boolean = true;
  selectedAnime: Anime | null = null;

  // search state
  searchResults: Anime[] = [];
  isLoadingSearch: boolean = true;
  keyword: string = '';
  keywordSubject = new Subject<string>();

  constructor(private anime: AnimeService) {}

  ngOnInit(): void {
    // this.loadPopularAnime();

    // this.keywordSubcription = this.keyword.valueChanges
    //   .pipe(debounceTime(500))
    //   .subscribe((value) => {
    //     this.searchResults = [];
    //     if (value && value.length > 2) {
    //       this.loadSearchAnime(value);
    //     }
    //   });
    this.keywordSubject.pipe(debounceTime(500)).subscribe((value) => {
      this.keyword = value;
      if (value && value.length > 2) {
        this.loadSearchAnime(value);
      }
    });
  }

  changeValue(val: string) {
    this.keywordSubject.next(val);
  }

  ngOnDestroy() {
    this.keywordSubject.unsubscribe();
  }

  loadSearchAnime(keyword: string) {
    this.isLoadingSearch = true;
    this.anime.searchAnime(keyword).subscribe({
      next: (response) => {
        this.searchResults = response.data.slice(0, 4);
        this.isLoadingSearch = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoadingSearch = false;
      },
    });
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

  selectAnime(value: Anime) {
    this.selectedAnime = value;
  }
}
