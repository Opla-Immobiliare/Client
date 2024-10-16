import { Component, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from "../../shared/icons/icons.module";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducers';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { AuthEffects } from './services/auth.effects';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { BusinessRegistrationComponent } from './register/business-registration/business-registration.component';

export const routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    RegisterComponent,
    BusinessRegistrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature("auth", authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    LoginComponent,
    ForgotPasswordComponent,
    BusinessRegistrationComponent
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    }
  }
}
