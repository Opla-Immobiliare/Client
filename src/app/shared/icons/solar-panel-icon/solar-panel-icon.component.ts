import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solar-panel-icon',
  templateUrl: './solar-panel-icon.component.html',
  styleUrls: ['./solar-panel-icon.component.scss']
})
export class SolarPanelIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
