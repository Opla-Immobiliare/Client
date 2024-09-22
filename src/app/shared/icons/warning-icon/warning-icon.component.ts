import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-icon',
  templateUrl: './warning-icon.component.html',
  styleUrls: ['./warning-icon.component.scss']
})
export class WarningIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
