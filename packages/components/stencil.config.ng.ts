import { Config } from '@stencil/core'

import { StencilBaseConfig } from './config/stencil.basic.config'
import { AngularGenerator } from './config/stencil.bindings.angular'

export const config: Config = {
  ...StencilBaseConfig,
  extras: {
    initializeNextTick: true,
  },
  outputTargets: [...(StencilBaseConfig.outputTargets as any), AngularGenerator()],
}
