import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coins-icon',
  templateUrl: './coins-icon.component.html',
  styleUrls: ['./coins-icon.component.scss']
})
export class CoinsIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
