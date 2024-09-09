import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-close-icon',
  templateUrl: './close-icon.component.html',
  styleUrls: ['./close-icon.component.scss']
})
export class CloseIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
