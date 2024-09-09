import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-x-icon',
  templateUrl: './x-icon.component.html',
  styleUrls: ['./x-icon.component.scss']
})
export class XIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
