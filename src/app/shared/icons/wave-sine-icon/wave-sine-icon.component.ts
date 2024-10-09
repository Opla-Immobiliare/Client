import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wave-sine-icon',
  templateUrl: './wave-sine-icon.component.html',
  styleUrls: ['./wave-sine-icon.component.scss']
})
export class WaveSineIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
