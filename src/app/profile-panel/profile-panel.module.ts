import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePanelComponent } from './profile-panel.component';

@NgModule({
  declarations: [ProfilePanelComponent],
  imports: [CommonModule],
  exports: [ProfilePanelComponent]
})
export class ProfilePanelModule {}
