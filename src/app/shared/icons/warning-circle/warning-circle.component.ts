import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warning-circle',
  templateUrl: './warning-circle.component.html',
  styleUrls: ['./warning-circle.component.scss']
})
export class WarningCircleComponent {

  @Input() color: string = '';
}
