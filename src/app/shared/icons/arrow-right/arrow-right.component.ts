import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-right',
  templateUrl: './arrow-right.component.html',
  styleUrls: ['./arrow-right.component.scss']
})
export class ArrowRightComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
