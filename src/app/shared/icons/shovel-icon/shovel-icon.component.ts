import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shovel-icon',
  templateUrl: './shovel-icon.component.html',
  styleUrls: ['./shovel-icon.component.scss']
})
export class ShovelIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
