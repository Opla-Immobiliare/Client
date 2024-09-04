import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bathtub-icon',
  templateUrl: './bathtub-icon.component.html',
  styleUrls: ['./bathtub-icon.component.scss']
})
export class BathtubIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
