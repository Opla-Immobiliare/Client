import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eye-slash-icon',
  templateUrl: './eye-slash-icon.component.html',
  styleUrls: ['./eye-slash-icon.component.scss']
})
export class EyeSlashIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
