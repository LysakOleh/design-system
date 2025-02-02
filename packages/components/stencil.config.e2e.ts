import { Config } from '@stencil/core'

import { StencilBaseConfig } from './config/stencil.basic.config'

export const config: Config = {
  ...StencilBaseConfig,
  tsconfig: 'tsconfig.docs.json',
  outputTargets: [
    ...(StencilBaseConfig.outputTargets as any),
    {
      type: 'www',
      dir: 'www',
      serviceWorker: false,
      empty: true,
      copy: [
        {
          src: '**/*.html',
        },
        {
          src: 'components.d.ts',
        },
        {
          src: '../../css/css/theme-compact.css',
          dest: 'assets/theme-compact.css',
        },
        { src: '../../css/css/baloise-design-system.css', dest: 'assets/baloise-design-system.css', warn: true },
        { src: '../../fonts/lib', dest: 'assets/fonts', warn: true },
      ],
    },
  ],
  testing: {
    rootDir: 'src',
    modulePathIgnorePatterns: ['cypress'],
  },
}
