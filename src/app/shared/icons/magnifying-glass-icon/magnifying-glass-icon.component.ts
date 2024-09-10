import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magnifying-glass-icon',
  templateUrl: './magnifying-glass-icon.component.html',
  styleUrls: ['./magnifying-glass-icon.component.scss']
})
export class MagnifyingGlassIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
