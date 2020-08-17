import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  API_KEY_LASTFM = 'c5eeb75d845298d286db59ee4a564f81';

  constructor(private http: HttpClient) {}

  searchMusic(search: string, queryType: string) {
    return this.http.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${search}&api_key=${this.API_KEY_LASTFM}&format=json`
    );
  }

  getArtistInformation(currentArtist: string, queryType: string) {
    return this.http.get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.${queryType}&artist=${currentArtist}&api_key=${this.API_KEY_LASTFM}&format=json`
    );
  }
}
