import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-pin-area-icon',
  templateUrl: './map-pin-area-icon.component.html',
  styleUrls: ['./map-pin-area-icon.component.scss']
})
export class MapPinAreaIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
