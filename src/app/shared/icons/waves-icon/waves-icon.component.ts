import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-waves-icon',
  templateUrl: './waves-icon.component.html',
  styleUrls: ['./waves-icon.component.scss']
})
export class WavesIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
