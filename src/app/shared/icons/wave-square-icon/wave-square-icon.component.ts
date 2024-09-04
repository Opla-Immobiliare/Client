import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave-square-icon',
  templateUrl: './wave-square-icon.component.html',
  styleUrls: ['./wave-square-icon.component.scss']
})
export class WaveSquareIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
