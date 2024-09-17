import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-city-icon',
  templateUrl: './city-icon.component.html',
  styleUrls: ['./city-icon.component.scss']
})
export class CityIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
