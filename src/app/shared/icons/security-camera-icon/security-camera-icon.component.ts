import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-security-camera-icon',
  templateUrl: './security-camera-icon.component.html',
  styleUrls: ['./security-camera-icon.component.scss']
})
export class SecurityCameraIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
