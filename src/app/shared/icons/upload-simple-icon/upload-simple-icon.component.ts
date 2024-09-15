import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upload-simple-icon',
  templateUrl: './upload-simple-icon.component.html',
  styleUrls: ['./upload-simple-icon.component.scss']
})
export class UploadSimpleIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';
}
