import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stairs-icon',
  templateUrl: './stairs-icon.component.html',
  styleUrls: ['./stairs-icon.component.scss']
})
export class StairsIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
