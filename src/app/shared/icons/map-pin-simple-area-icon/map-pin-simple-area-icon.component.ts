import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map-pin-simple-area-icon',
  templateUrl: './map-pin-simple-area-icon.component.html',
  styleUrls: ['./map-pin-simple-area-icon.component.scss']
})
export class MapPinSimpleAreaIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
