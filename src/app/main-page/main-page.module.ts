import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ProfilePanelModule } from '../profile-panel';
import { PostListModule } from '../post-list';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, ProfilePanelModule, PostListModule],
  exports: [MainPageComponent]
})
export class MainPageModule {}
