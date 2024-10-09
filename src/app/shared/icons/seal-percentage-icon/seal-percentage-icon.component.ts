import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seal-percentage-icon',
  templateUrl: './seal-percentage-icon.component.html',
  styleUrls: ['./seal-percentage-icon.component.scss']
})
export class SealPercentageIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
