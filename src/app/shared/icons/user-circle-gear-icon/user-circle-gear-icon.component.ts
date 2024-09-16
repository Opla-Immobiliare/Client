import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-circle-gear-icon',
  templateUrl: './user-circle-gear-icon.component.html',
  styleUrls: ['./user-circle-gear-icon.component.scss']
})
export class UserCircleGearIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
