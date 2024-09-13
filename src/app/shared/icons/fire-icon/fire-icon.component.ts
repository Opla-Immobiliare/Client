import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fire-icon',
  templateUrl: './fire-icon.component.html',
  styleUrls: ['./fire-icon.component.scss']
})
export class FireIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
