import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hammer-icon',
  templateUrl: './hammer-icon.component.html',
  styleUrls: ['./hammer-icon.component.scss']
})
export class HammerIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
