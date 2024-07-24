import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opla-logo',
  templateUrl: './opla-logo.component.html',
  styleUrls: ['./opla-logo.component.scss']
})
export class OplaLogoComponent {

  @Input() color:string = '';
  @Input() dimensions:string = '';
}
