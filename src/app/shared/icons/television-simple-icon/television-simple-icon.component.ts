import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-television-simple-icon',
  templateUrl: './television-simple-icon.component.html',
  styleUrls: ['./television-simple-icon.component.scss']
})
export class TelevisionSimpleIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
