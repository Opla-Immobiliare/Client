import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-caret-down',
  templateUrl: './caret-down.component.html',
  styleUrls: ['./caret-down.component.scss']
})
export class CaretDownComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
