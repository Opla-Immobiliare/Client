import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer-hot-icon',
  templateUrl: './thermometer-hot-icon.component.html',
  styleUrls: ['./thermometer-hot-icon.component.scss']
})
export class ThermometerHotIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
