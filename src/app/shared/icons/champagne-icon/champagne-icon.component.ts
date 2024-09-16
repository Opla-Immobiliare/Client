import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-champagne-icon',
  templateUrl: './champagne-icon.component.html',
  styleUrls: ['./champagne-icon.component.scss']
})
export class ChampagneIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
