import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plus-icon',
  templateUrl: './plus-icon.component.html',
  styleUrls: ['./plus-icon.component.scss']
})
export class PlusIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
