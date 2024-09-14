import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plant-icon',
  templateUrl: './plant-icon.component.html',
  styleUrls: ['./plant-icon.component.scss']
})
export class PlantIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
