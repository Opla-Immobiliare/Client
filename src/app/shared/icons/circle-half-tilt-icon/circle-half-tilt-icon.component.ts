import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-half-tilt-icon',
  templateUrl: './circle-half-tilt-icon.component.html',
  styleUrls: ['./circle-half-tilt-icon.component.scss']
})
export class CircleHalfTiltIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
