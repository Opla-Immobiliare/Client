import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-simple-icon',
  templateUrl: './house-simple-icon.component.html',
  styleUrls: ['./house-simple-icon.component.scss']
})
export class HouseSimpleIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
