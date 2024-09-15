import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-siren-icon',
  templateUrl: './siren-icon.component.html',
  styleUrls: ['./siren-icon.component.scss']
})
export class SirenIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
