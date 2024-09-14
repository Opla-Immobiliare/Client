import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-warehouse-icon',
  templateUrl: './warehouse-icon.component.html',
  styleUrls: ['./warehouse-icon.component.scss']
})
export class WarehouseIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
