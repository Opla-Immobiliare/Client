import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-diamond-icon',
  templateUrl: './warning-diamond-icon.component.html',
  styleUrls: ['./warning-diamond-icon.component.scss']
})
export class WarningDiamondIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
