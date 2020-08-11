import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ProfilePanelModule } from '../profile-panel';
import { PostListModule } from '../post-list';
import { DisplayPostModule } from '../display-post';
import { FooterModule } from '../footer';
import { HeaderModule } from '../header';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    ProfilePanelModule,
    PostListModule,
    DisplayPostModule,
    HeaderModule,
    FooterModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule {}
