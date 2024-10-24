import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sad-icon',
  templateUrl: './sad-icon.component.html',
  styleUrls: ['./sad-icon.component.scss']
})
export class SadIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
