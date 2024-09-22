import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrows-down-up-icon',
  templateUrl: './arrows-down-up-icon.component.html',
  styleUrls: ['./arrows-down-up-icon.component.scss']
})
export class ArrowsDownUpIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
