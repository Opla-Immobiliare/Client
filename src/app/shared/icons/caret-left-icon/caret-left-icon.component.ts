import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caret-left-icon',
  templateUrl: './caret-left-icon.component.html',
  styleUrls: ['./caret-left-icon.component.scss']
})
export class CaretLeftIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
