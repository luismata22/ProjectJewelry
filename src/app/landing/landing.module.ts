import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
    imports: [
        LandingRoutingModule,
        NbCardModule,
        ThemeModule,
    ],
    declarations: [
        LandingComponent
    ],
})
export class LandingModule {
}
