import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pencil',
  templateUrl: './pencil.component.html',
  styleUrls: ['./pencil.component.scss']
})
export class PencilComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
