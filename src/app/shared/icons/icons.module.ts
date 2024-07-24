import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OplaLogoComponent } from './opla-logo/opla-logo.component';
import { LinkedinIconComponent } from './linkedin-icon/linkedin-icon.component';
import { InstagramIconComponent } from './instagram-icon/instagram-icon.component';
import { XIconComponent } from './x-icon/x-icon.component';
import { ArrowIconComponent } from './arrow-icon/arrow-icon.component';
import { RightArrowIconComponent } from './right-arrow-icon/right-arrow-icon.component';



@NgModule({
  declarations: [
    OplaLogoComponent,
    LinkedinIconComponent,
    InstagramIconComponent,
    XIconComponent,
    ArrowIconComponent,
    RightArrowIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OplaLogoComponent,
    LinkedinIconComponent,
    InstagramIconComponent,
    XIconComponent,
    ArrowIconComponent,
    RightArrowIconComponent
  ]
})
export class IconsModule { }
