import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eye-icon',
  templateUrl: './eye-icon.component.html',
  styleUrls: ['./eye-icon.component.scss']
})
export class EyeIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
