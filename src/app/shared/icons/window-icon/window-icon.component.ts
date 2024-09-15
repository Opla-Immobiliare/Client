import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-icon',
  templateUrl: './window-icon.component.html',
  styleUrls: ['./window-icon.component.scss']
})
export class WindowIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
