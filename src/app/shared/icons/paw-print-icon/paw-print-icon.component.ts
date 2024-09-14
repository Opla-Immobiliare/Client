import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paw-print-icon',
  templateUrl: './paw-print-icon.component.html',
  styleUrls: ['./paw-print-icon.component.scss']
})
export class PawPrintIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
