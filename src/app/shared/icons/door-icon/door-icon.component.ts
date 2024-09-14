import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-door-icon',
  templateUrl: './door-icon.component.html',
  styleUrls: ['./door-icon.component.scss']
})
export class DoorIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
