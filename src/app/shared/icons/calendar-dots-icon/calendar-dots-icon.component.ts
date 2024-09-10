import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-dots-icon',
  templateUrl: './calendar-dots-icon.component.html',
  styleUrls: ['./calendar-dots-icon.component.scss']
})
export class CalendarDotsIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
