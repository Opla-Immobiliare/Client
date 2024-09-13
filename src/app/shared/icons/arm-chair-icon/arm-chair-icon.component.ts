import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arm-chair-icon',
  templateUrl: './arm-chair-icon.component.html',
  styleUrls: ['./arm-chair-icon.component.scss']
})
export class ArmChairIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
