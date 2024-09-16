import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-antenna-icon',
  templateUrl: './antenna-icon.component.html',
  styleUrls: ['./antenna-icon.component.scss']
})
export class AntennaIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
