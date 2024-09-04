import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-icon',
  templateUrl: './house-icon.component.html',
  styleUrls: ['./house-icon.component.scss']
})
export class HouseIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
