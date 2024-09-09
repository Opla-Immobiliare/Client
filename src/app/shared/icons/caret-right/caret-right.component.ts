import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caret-right',
  templateUrl: './caret-right.component.html',
  styleUrls: ['./caret-right.component.scss']
})
export class CaretRightComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
