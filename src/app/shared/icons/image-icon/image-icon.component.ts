import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-icon',
  templateUrl: './image-icon.component.html',
  styleUrls: ['./image-icon.component.scss']
})

export class ImageIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
