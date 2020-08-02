import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
