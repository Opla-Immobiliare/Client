import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cooking-pot-icon',
  templateUrl: './cooking-pot-icon.component.html',
  styleUrls: ['./cooking-pot-icon.component.scss']
})
export class CookingPotIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
