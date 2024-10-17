import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-circle',
  templateUrl: './check-circle.component.html',
  styleUrls: ['./check-circle.component.scss']
})
export class CheckCircleComponent {

  @Input() color:string = '';
  @Input() dimensions:string = '';
}
