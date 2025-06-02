export interface IFavoriteMusic {
  title: string;
  artist: string;
  release_year: string;
  genre: string;
  image: string;
  url: string;
  type: string;
  album?: string;
  duration_ms?: number;
  total_tracks?: number;
}
