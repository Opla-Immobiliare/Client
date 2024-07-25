import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OplaLogoComponent } from './opla-logo/opla-logo.component';
import { LinkedinIconComponent } from './linkedin-icon/linkedin-icon.component';
import { InstagramIconComponent } from './instagram-icon/instagram-icon.component';
import { XIconComponent } from './x-icon/x-icon.component';
import { ArrowIconComponent } from './arrow-icon/arrow-icon.component';
import { RightArrowIconComponent } from './right-arrow-icon/right-arrow-icon.component';
import { UserIconComponent } from './user-icon/user-icon.component';
import { SettingsIconComponent } from './settings-icon/settings-icon.component';
import { AddIconComponent } from './add-icon/add-icon.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { HeartIconComponent } from './heart-icon/heart-icon.component';



@NgModule({
  declarations: [
    OplaLogoComponent,
    LinkedinIconComponent,
    InstagramIconComponent,
    XIconComponent,
    ArrowIconComponent,
    RightArrowIconComponent,
    UserIconComponent,
    SettingsIconComponent,
    AddIconComponent,
    SearchIconComponent,
    HeartIconComponent
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
    RightArrowIconComponent,
    UserIconComponent,
    SettingsIconComponent,
    AddIconComponent,
    SearchIconComponent,
    HeartIconComponent
  ]
})
export class IconsModule { }
