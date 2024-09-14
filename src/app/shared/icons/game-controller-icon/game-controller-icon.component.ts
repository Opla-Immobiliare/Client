import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-controller-icon',
  templateUrl: './game-controller-icon.component.html',
  styleUrls: ['./game-controller-icon.component.scss']
})
export class GameControllerIconComponent {
  @Input() dimensions: string = '';
  @Input() color: string = '';

}
