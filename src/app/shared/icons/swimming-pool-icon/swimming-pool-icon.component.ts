import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-swimming-pool-icon',
  templateUrl: './swimming-pool-icon.component.html',
  styleUrls: ['./swimming-pool-icon.component.scss']
})
export class SwimmingPoolIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
