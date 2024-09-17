import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-slash-icon',
  templateUrl: './calendar-slash-icon.component.html',
  styleUrls: ['./calendar-slash-icon.component.scss']
})
export class CalendarSlashIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
