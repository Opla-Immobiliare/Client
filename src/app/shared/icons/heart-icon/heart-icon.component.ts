import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heart-icon',
  templateUrl: './heart-icon.component.html',
  styleUrls: ['./heart-icon.component.scss']
})
export class HeartIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
