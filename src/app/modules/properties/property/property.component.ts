import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  constructor(private clipboard: ClipboardService) {}


  // Copy to clipboard
  copyToClipboard(id: string): void {
    this.clipboard.copy(id);
  }

  ngOnInit(): void {}
}
