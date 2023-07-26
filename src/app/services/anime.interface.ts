export interface AnimePopular {
  data: Anime[];
}
export interface Anime {
  id: string;
  slug: string;
  anilistId: number;
  coverImage: string;
  bannerImage: string;
  status: string;
  season: string;
  title: Title;
  mappings: Mappings;
  year: string;
  genre: string[];
}

export interface Title {
  native: string;
  romaji: string;
  english: string;
  userPreferred: string;
}

export interface Mappings {
  mal: number;
  anidb: number;
  kitsu: number;
  anilist: number;
  thetvdb: number;
  anisearch: number;
  livechart: number;
  'notify.moe': string;
  'anime-planet': string;
}
