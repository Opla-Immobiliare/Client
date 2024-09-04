import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trend-down-icon',
  templateUrl: './trend-down-icon.component.html',
  styleUrls: ['./trend-down-icon.component.scss']
})
export class TrendDownIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
