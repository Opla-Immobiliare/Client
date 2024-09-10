import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chair-icon',
  templateUrl: './chair-icon.component.html',
  styleUrls: ['./chair-icon.component.scss']
})
export class ChairIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
