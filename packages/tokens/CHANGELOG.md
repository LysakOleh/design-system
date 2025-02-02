# @baloise/design-system-tokens

## 14.5.1

## 14.5.0

## 14.4.0

## 14.3.0

### Patch Changes

- [#1073](https://github.com/baloise/design-system/pull/1073) - The design tokens for line-height values for x-small and small text has been adjusted to ensure compliance with accessibility (a11y) standards.

## 14.2.1

## 14.2.0

## 14.1.0

## 14.0.5

## 14.0.4

## 14.0.3

## 14.0.2

## 14.0.1

### Patch Changes

- [`af2c20f52`](https://github.com/baloise/design-system/commit/af2c20f520d1978df0547be5767803ead6d66ed4) - Raise the z-index value of the toast to ensure it overlays a modal.

## 14.0.0

### Major Changes

- [#940](https://github.com/baloise/design-system/pull/940) - Create z-index design tokens and adjust the components.

In version 14, we've introduced `z-index` values as design tokens. Consequently, adjustments were made to each component.
If you've been using **custom z-index values** in your app, please be aware that this could potentially result in broken layouts.

After upgrading the design system in your app, please take a moment to check if any layouts are affected. If necessary, make adjustments to the z-index accordingly.

| Name       | CSS-Variable               | Value     | Description                                                                                                          |
| ---------- | -------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| deep       | `--bal-z-index-deep`       | `-999999` | Deep z-index is used to stack something behind everything else.                                                      |
| default    | `--bal-z-index-default`    | `1`       | The default z-index for components and elements inside components.                                                   |
| masked     | `--bal-z-index-masked`     | `100`     | Default z-index for masked interface elements.                                                                       |
| mask       | `--bal-z-index-mask`       | `200`     | Default z-index for masking interface elements.                                                                      |
| sticky     | `--bal-z-index-sticky`     | `300`     | Default z-index for sticky interface elements.                                                                       |
| navigation | `--bal-z-index-navigation` | `400`     | Default z-index for navigation.                                                                                      |
| popup      | `--bal-z-index-popup`      | `1000`    | Default z-index for popups that stacks on top of all other elements.                                                 |
| modal      | `--bal-z-index-modal`      | `1100`    | Default z-index for modals that stacks on top of overlays and other elements, but still allows popups to be visible. |
| toast      | `--bal-z-index-toast`      | `1200`    | Default z-index for toast and snackbar messages.                                                                     |
| tooltip    | `--bal-z-index-tooltip`    | `1300`    | Default z-index for tooltips.                                                                                        |

Have a look at the [Z-Index documentation](https://design.baloise.dev?path=/docs/foundation-elevation-design-tokens--page).

## 13.7.1

## 13.7.0

## 13.6.2

## 13.6.1

## 13.6.0

## 13.5.0

## 13.4.4

## 13.4.3

## 13.4.2

## 13.4.1

## 13.4.0

## 13.3.1

## 13.3.0

## 13.2.1

## 13.2.0

## 13.1.0

## 13.0.0

### Major Changes

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - remove deprecated parts

  ### Design Token Removal

  | Component     | Value     | Why                                     |
  | ------------- | --------- | --------------------------------------- |
  | **radius**    | `small`   | Is not supported in the new Style Guide |
  | **radius**    | `x-large` | Is not supported in the new Style Guide |
  | **container** | `is-blog` | Use default container instead           |

  ### Component Property Renaming

  | Component            | Before        | After              |
  | -------------------- | ------------- | ------------------ |
  | **bal-card-actions** | `right`       | `position="right"` |
  | **bal-navbar-brand** | `link-target` | `target`           |
  | **bal-stage**        | `has-shape`   | `shape`            |
  | **bal-radio**        | `is-empty`    | `label-hidden`     |

  ### Component Property Removal

  | Component      | Property       | Why                                                              |
  | -------------- | -------------- | ---------------------------------------------------------------- |
  | **bal-select** | `no-border`    | Left over from the old style guide. Was event not active anymore |
  | **bal-select** | `has-movement` | Left over from the old style guide. Was event not active anymore |

## 12.13.1

## 12.13.0

## 12.12.0

### Minor Changes

- [#1245](https://github.com/baloise-incubator/design-system/pull/1245) [`f9144f085`](https://github.com/baloise-incubator/design-system/commit/f9144f08528edd3dc58a17366a4426198b42410f) Thanks [@hirsch88](https://github.com/hirsch88)! - add new components bal-content, bal-stack and add new styles for radio and checkbox.

  New components:

  - [bal-content](https://baloise-design-system.vercel.app/?path=/docs/components-layout-content--basic)
  - [bal-stack](https://baloise-design-system.vercel.app/?path=/docs/components-layout-stack--basic)

  New radio and checkbox style:

  - [bal-checkbox button](https://baloise-design-system.vercel.app/?path=/docs/components-form-checkbox--basic#checkbox-button)
  - [bal-radio button](https://baloise-design-system.vercel.app/?path=/docs/components-form-radio--basic#radio-button)

  Updated bal-icon component. New colors, sizes are added and state properties invalid and disabled. Moreover, the color `auto` can
  be used to leave the color as it is.

  Check out the updated [documentation](https://baloise-design-system.vercel.app/?path=/docs/components-icon--basic) for the bal-icon.

## 12.11.0

## 12.10.0

## 12.9.0

### Patch Changes

- [#1198](https://github.com/baloise/design-system/pull/1198) [`78b00ba20`](https://github.com/baloise/design-system/commit/78b00ba2042172ea23fe8827a60292c167d38e4c) Thanks [@hirsch88](https://github.com/hirsch88)! - deprecated radius token **small** and **x-large**. Please use normal for small and use rounded for x-large.

- [#1198](https://github.com/baloise/design-system/pull/1198) [`78b00ba20`](https://github.com/baloise/design-system/commit/78b00ba2042172ea23fe8827a60292c167d38e4c) Thanks [@hirsch88](https://github.com/hirsch88)! - deprecate container blog-page. Please use default container size.

  Just use `<div class="container"></div>` instead of `<div class="container is-blog-page"></div>`

- [#1198](https://github.com/baloise/design-system/pull/1198) [`78b00ba20`](https://github.com/baloise/design-system/commit/78b00ba2042172ea23fe8827a60292c167d38e4c) Thanks [@hirsch88](https://github.com/hirsch88)! - adding missing inverted text and border color tokens.

  - `primary-light` was added for disabled text on dark background
  - `primary-light` was added for disabled border lines on dark background
  - `white` was added as a primary border line color on dark background

## 12.8.2

### Patch Changes

- [`ab352d875`](https://github.com/baloise/design-system/commit/ab352d8755332f0c8adc4801e3d5c7c391bb8f27) Thanks [@hirsch88](https://github.com/hirsch88)! - adjust colors due to contrast issues

## 12.8.1

### Patch Changes

- [#1182](https://github.com/baloise/design-system/pull/1182) [`38f0a7fd4`](https://github.com/baloise/design-system/commit/38f0a7fd492927a49e811e1b0461ed39ebe057d4) Thanks [@hirsch88](https://github.com/hirsch88)! - adjust package.json to npm workspace structure and move contact.js to components dependencies

## 12.8.0

## 12.7.1

## 12.7.0

## 12.6.0

### Minor Changes

- [#1084](https://github.com/baloise/design-system/pull/1084) [`26b23997c`](https://github.com/baloise/design-system/commit/26b23997c9c4fc72824a60fdf2928b1b82b62f26) Thanks [@hirsch88](https://github.com/hirsch88)! - split CSS-Package into smaller exports and moved to CSS-Variables.

  Replace the import of the `global` SASS file with the CSS-Package.

  **Before**

  ```scss
  @import '@baloise/design-system-components/src/styles/global';
  ```

  **After**

  ```scss
  @import '@baloise/design-system-css/sass/baloise-design-system';
  ```

  To be more flexible the new CSS exports can be used directly like that:

  ```scss
  // Resets CSS for all browser
  @import '@baloise/design-system-css/css/normalize';
  @import '@baloise/design-system-css/css/structure';
  // Custom font faces
  @import '@baloise/design-system-css/sass/font';
  // Core CSS, always required
  @import '@baloise/design-system-css/css/core';
  // Deprecated styles will be removed with the next breaking version (optional)
  @import '@baloise/design-system-css/sass/legacy';

  // CSS utilities classes (optional)
  @import '@baloise/design-system-css/css/border';
  @import '@baloise/design-system-css/css/color';
  @import '@baloise/design-system-css/css/display';
  @import '@baloise/design-system-css/css/flex';
  @import '@baloise/design-system-css/css/grid';
  @import '@baloise/design-system-css/css/opacity';
  @import '@baloise/design-system-css/css/radius';
  @import '@baloise/design-system-css/css/shadow';
  @import '@baloise/design-system-css/css/spacing';
  @import '@baloise/design-system-css/css/typography';
  ```

### Patch Changes

- [#1101](https://github.com/baloise/design-system/pull/1101) [`af1560a6e`](https://github.com/baloise/design-system/commit/af1560a6e5ed5abb3bc8ae0f4e7cb1507464634d) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - use tokens in the components instead of hard coded css values

## 12.5.0

### Minor Changes

- [#1050](https://github.com/baloise/design-system/pull/1050) [`355fc4f3c`](https://github.com/baloise/design-system/commit/355fc4f3cd13f4708b4d1a0f219658c3214df253) Thanks [@hirsch88](https://github.com/hirsch88)! - add container design tokens

## 12.4.1

## 12.4.0

## 12.3.0

## 12.2.0

## Previous Versions

- [Older versions](https://github.com/baloise/design-system/blob/main/CHANGELOG_v12.md)
- [Rebranding versions](https://github.com/baloise/design-system/blob/main/CHANGELOG_NEXT.md)
