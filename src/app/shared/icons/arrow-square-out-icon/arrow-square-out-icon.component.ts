import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-square-out-icon',
  templateUrl: './arrow-square-out-icon.component.html',
  styleUrls: ['./arrow-square-out-icon.component.scss']
})
export class ArrowSquareOutIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
