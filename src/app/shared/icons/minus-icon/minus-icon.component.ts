import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minus-icon',
  templateUrl: './minus-icon.component.html',
  styleUrls: ['./minus-icon.component.scss']
})
export class MinusIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
