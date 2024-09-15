import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-windows-logo-icon',
  templateUrl: './windows-logo-icon.component.html',
  styleUrls: ['./windows-logo-icon.component.scss']
})
export class WindowsLogoIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
