import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-icon',
  templateUrl: './steps-icon.component.html',
  styleUrls: ['./steps-icon.component.scss']
})
export class StepsIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
