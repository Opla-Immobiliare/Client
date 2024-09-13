import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parking-icon',
  templateUrl: './parking-icon.component.html',
  styleUrls: ['./parking-icon.component.scss']
})
export class ParkingIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
