import { NgModule } from '@angular/core';

import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [SharedModule, CommonModule, BrowserModule],
  declarations: [MainComponent]
})
export class MainModule {}
