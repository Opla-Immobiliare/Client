import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-envelope-icon',
  templateUrl: './envelope-icon.component.html',
  styleUrls: ['./envelope-icon.component.scss']
})
export class EnvelopeIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
