import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elevator-icon',
  templateUrl: './elevator-icon.component.html',
  styleUrls: ['./elevator-icon.component.scss']
})
export class ElevatorIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
