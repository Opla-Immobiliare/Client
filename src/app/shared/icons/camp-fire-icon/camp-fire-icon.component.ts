import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-camp-fire-icon',
  templateUrl: './camp-fire-icon.component.html',
  styleUrls: ['./camp-fire-icon.component.scss']
})
export class CampFireIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
