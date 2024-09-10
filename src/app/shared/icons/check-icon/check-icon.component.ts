import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-icon',
  templateUrl: './check-icon.component.html',
  styleUrls: ['./check-icon.component.scss']
})
export class CheckIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
