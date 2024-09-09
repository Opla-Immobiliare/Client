import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sliders-horizontal-icon',
  templateUrl: './sliders-horizontal-icon.component.html',
  styleUrls: ['./sliders-horizontal-icon.component.scss']
})
export class SlidersHorizontalIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
