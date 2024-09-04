import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bed-icon',
  templateUrl: './bed-icon.component.html',
  styleUrls: ['./bed-icon.component.scss']
})
export class BedIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
