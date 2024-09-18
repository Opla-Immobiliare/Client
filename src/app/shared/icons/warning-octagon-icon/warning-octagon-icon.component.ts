import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-octagon-icon',
  templateUrl: './warning-octagon-icon.component.html',
  styleUrls: ['./warning-octagon-icon.component.scss']
})
export class WarningOctagonIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
