import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-euro-icon',
  templateUrl: './currency-euro-icon.component.html',
  styleUrls: ['./currency-euro-icon.component.scss']
})
export class CurrencyEuroIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
