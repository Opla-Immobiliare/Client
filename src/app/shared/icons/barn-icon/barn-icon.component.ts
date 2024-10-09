import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barn-icon',
  templateUrl: './barn-icon.component.html',
  styleUrls: ['./barn-icon.component.scss']
})
export class BarnIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
