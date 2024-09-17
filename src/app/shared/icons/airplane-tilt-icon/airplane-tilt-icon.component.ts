import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-airplane-tilt-icon',
  templateUrl: './airplane-tilt-icon.component.html',
  styleUrls: ['./airplane-tilt-icon.component.scss']
})
export class AirplaneTiltIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
