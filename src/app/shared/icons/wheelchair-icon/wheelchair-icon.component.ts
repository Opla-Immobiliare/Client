import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wheelchair-icon',
  templateUrl: './wheelchair-icon.component.html',
  styleUrls: ['./wheelchair-icon.component.scss']
})
export class WheelchairIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
