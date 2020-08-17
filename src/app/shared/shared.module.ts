import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SearchComponent } from '../shared/generic-components/search.component';

import { ApiService } from './services/api.service';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],

  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [ApiService]
})
export class SharedModule {}
