import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-icon',
  templateUrl: './credit-card-icon.component.html',
  styleUrls: ['./credit-card-icon.component.scss']
})
export class CreditCardIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
