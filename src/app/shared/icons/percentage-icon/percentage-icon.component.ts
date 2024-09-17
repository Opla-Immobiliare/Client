import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-percentage-icon',
  templateUrl: './percentage-icon.component.html',
  styleUrls: ['./percentage-icon.component.scss']
})
export class PercentageIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
