import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-bulb-filament-icon',
  templateUrl: './light-bulb-filament-icon.component.html',
  styleUrls: ['./light-bulb-filament-icon.component.scss']
})
export class LightBulbFilamentIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
