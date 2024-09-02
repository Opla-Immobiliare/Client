import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  templateUrl: './arrow-icon.component.html',
  styleUrls: ['./arrow-icon.component.scss']
})
export class ArrowIconComponent {
  @Input() color: string = '';
  @Input() dimension: string = '';
}
