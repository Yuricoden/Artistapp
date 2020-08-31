import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

import { debounceTime, distinctUntilChanged } from 'rxjs/internal/operators';
@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  currentArtist;
  musicList;
  isShow = true;
  artistData;
  constructor(private apiService: ApiService) {}

  openUser = ev => {
    this.isShow = false;
    this.apiService.getArtistInformation(ev, 'getinfo').subscribe(res => {
      this.currentArtist = res;
    });

    this.apiService.getArtistInformation(ev, 'gettopalbums').subscribe(res => {
      this.artistData = res;
    });
  };

  getResult = ev => {
    this.apiService
      .searchMusic(ev, 'search')
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((res: any) => {
        this.musicList = res;
      });
  };
}
