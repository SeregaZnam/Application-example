import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ProfilePanelModule } from '../profile-panel';
import { PostListModule } from '../post-list';
import { DisplayPostModule } from '../display-post';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, ProfilePanelModule, PostListModule, DisplayPostModule],
  exports: [MainPageComponent]
})
export class MainPageModule {}
