import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  //SearchInputComponent,
  //TinyMCEComponent,
} from './components';
/* import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes'; */
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { LandingComponent } from './layouts/landing/landing.component';

/* const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
]; */

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    //NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    //SearchInputComponent,
    //TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
    LandingComponent],
  declarations: [
    HeaderComponent,
    FooterComponent,
    //SearchInputComponent,
    //TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
    LandingComponent,
  ],
})

export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME],
        ).providers,
      ],
    };
  }
}
