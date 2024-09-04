import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solid-heart-icon',
  templateUrl: './solid-heart-icon.component.html',
  styleUrls: ['./solid-heart-icon.component.scss']
})
export class SolidHeartIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
