import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-icon',
  templateUrl: './copy-icon.component.html',
  styleUrls: ['./copy-icon.component.scss']
})
export class CopyIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
