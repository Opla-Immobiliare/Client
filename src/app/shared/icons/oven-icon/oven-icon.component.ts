import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-oven-icon',
  templateUrl: './oven-icon.component.html',
  styleUrls: ['./oven-icon.component.scss']
})
export class OvenIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
