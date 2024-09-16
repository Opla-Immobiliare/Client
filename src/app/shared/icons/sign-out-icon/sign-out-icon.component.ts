import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sign-out-icon',
  templateUrl: './sign-out-icon.component.html',
  styleUrls: ['./sign-out-icon.component.scss']
})
export class SignOutIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
