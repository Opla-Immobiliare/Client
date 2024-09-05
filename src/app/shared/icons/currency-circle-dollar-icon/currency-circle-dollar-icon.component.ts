import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-circle-dollar-icon',
  templateUrl: './currency-circle-dollar-icon.component.html',
  styleUrls: ['./currency-circle-dollar-icon.component.scss']
})
export class CurrencyCircleDollarIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
