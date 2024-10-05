import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from '../shared/icons/icons.module';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { AuthModule } from '../modules/auth/auth.module';
import { TopRightActionComponent } from './top-right-action/top-right-action.component';
import { CookiesComponent } from './cookies/cookies.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopRightActionComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    AuthModule,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
