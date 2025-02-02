import { APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule, NgZone } from '@angular/core'
import { CommonModule, DOCUMENT } from '@angular/common'

import { appInitialize, BaloiseDesignSystemAngularConfig } from './app-initialize'
import { DIRECTIVES } from './generated/proxies-list'
import { BooleanValueAccessor } from './generated/boolean-value-accessor'
import { NumericValueAccessor } from './generated/number-value-accessor'
import { SelectValueAccessor } from './generated/select-value-accessor'
import { TextValueAccessor } from './generated/text-value-accessor'
import { BalAutoFocus } from './focus.directive'
import { AngularDelegate } from './overlays/angular-delegate'
import { BalModalService } from './overlays/modal.service'
import { BalToastService } from './overlays/toast.service'
import { BalSnackbarService } from './overlays/snackbar.service'
import { BalNgErrorComponent } from './components/error.component'
import { BalBreakpointsService } from './util/breakpoints.service'
import { BalOrientationService } from './util/orientation.service'
import { BalConfigService } from './util/config.service'

export const BalConfigToken = new InjectionToken<any>('USERCONFIG')

const DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,
  // ngModel accessors
  BooleanValueAccessor,
  NumericValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
  // custom directives
  BalAutoFocus,
  BalNgErrorComponent,
]

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
  providers: [
    AngularDelegate,
    BalModalService,
    BalToastService,
    BalSnackbarService,
    BalBreakpointsService,
    BalOrientationService,
    BalConfigService,
  ],
})
export class BaloiseDesignSystemModule {
  static forRoot(config: BaloiseDesignSystemAngularConfig = {}): ModuleWithProviders<BaloiseDesignSystemModule> {
    return {
      ngModule: BaloiseDesignSystemModule,
      providers: [
        {
          provide: BalConfigToken,
          useValue: config,
        },
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
          deps: [BalConfigToken, DOCUMENT, NgZone],
        },
      ],
    }
  }
}
