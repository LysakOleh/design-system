# @baloise/design-system-components

## 14.5.1

### Patch Changes

- [#1157](https://github.com/baloise/design-system/pull/1157) - `nav` link items are consistently aligned to the left.

- Updated dependencies []:
  - @baloise/design-system-css@14.5.1
  - @baloise/design-system-fonts@14.5.1
  - @baloise/design-system-icons@14.5.1
  - @baloise/design-system-tokens@14.5.1

## 14.5.0

### Patch Changes

- [#1155](https://github.com/baloise/design-system/pull/1155) - The desktop variant of the `nav` component now features a 1rem gap between its link columns.

- [#1151](https://github.com/baloise/design-system/pull/1151) - The `nav` component detects the device breakpoint during its construction phase.

- Updated dependencies []:
  - @baloise/design-system-css@14.5.0
  - @baloise/design-system-fonts@14.5.0
  - @baloise/design-system-icons@14.5.0
  - @baloise/design-system-tokens@14.5.0

## 14.4.0

### Patch Changes

- [#1125](https://github.com/baloise/design-system/pull/1125) - The meta buttons within the `nav` component now support both the ARIA label and title attributes, enhancing accessibility (a11y).

- [#1125](https://github.com/baloise/design-system/pull/1125) - The accordion functionality in the `nav` component now opens and closes at the touch breakpoint when the library was minified.

- [#1124](https://github.com/baloise/design-system/pull/1124) - Resolve day label formatting to prevent line breaks and update month names on language change.

- [#1120](https://github.com/baloise/design-system/pull/1120) - Resolve carousel product slider color inconsistency during hover on yellow product

- [#1125](https://github.com/baloise/design-system/pull/1125) - With form submission, the date value will be automatically formatted into ISO standard.

- Updated dependencies []:
  - @baloise/design-system-css@14.4.0
  - @baloise/design-system-fonts@14.4.0
  - @baloise/design-system-icons@14.4.0
  - @baloise/design-system-tokens@14.4.0

## 14.3.0

### Minor Changes

- [#1110](https://github.com/baloise/design-system/pull/1110) - A new `WhatsApp` icon has been added to the icons collection.

- [#1073](https://github.com/baloise/design-system/pull/1073) - The icon component now includes support for brand-icons. Additionally, we've removed the padded frame for large icons and bigger sizes, as brand-icons already come with their own frame. Furthermore, we've ensured that the available color list is now complete.

### Patch Changes

- [#1073](https://github.com/baloise/design-system/pull/1073) - The sheet component now has a default white background to address the transparent overlay issue.

- [#1109](https://github.com/baloise/design-system/pull/1109) - The number input component for the German region now supports decimal points with a comma separator.

- [#1073](https://github.com/baloise/design-system/pull/1073) - The design tokens for line-height values for x-small and small text has been adjusted to ensure compliance with accessibility (a11y) standards.

- [#1104](https://github.com/baloise/design-system/pull/1104) - Assign the `name` attribute to the native input element of the `bal-date` component.

- Updated dependencies [[`0613561fb`](https://github.com/baloise/design-system/commit/0613561fb2aeaf4557c1845b2cd9e42f7273542a), [`82ebf8d0c`](https://github.com/baloise/design-system/commit/82ebf8d0c7a15c03682f754d904c4bff151c72f0), [`82ebf8d0c`](https://github.com/baloise/design-system/commit/82ebf8d0c7a15c03682f754d904c4bff151c72f0)]:
  - @baloise/design-system-icons@14.3.0
  - @baloise/design-system-tokens@14.3.0
  - @baloise/design-system-css@14.3.0
  - @baloise/design-system-fonts@14.3.0

## 14.2.1

### Patch Changes

- [#1100](https://github.com/baloise/design-system/pull/1100) - Correct sliding width issue in card carousel for consistent display

- [#1099](https://github.com/baloise/design-system/pull/1099) - Adjusted shifting of the tooltip and popup component. Moreover, adjust scroll position for touch navigation.

- Updated dependencies []:
  - @baloise/design-system-css@14.2.1
  - @baloise/design-system-fonts@14.2.1
  - @baloise/design-system-icons@14.2.1
  - @baloise/design-system-tokens@14.2.1

## 14.2.0

### Minor Changes

- [#1094](https://github.com/baloise/design-system/pull/1094) - Meta links can also be created by simply passing the `href` and `target` attributes along with the `buttons` component property.

  ```ts
  [
    {
      icon: 'web',
      touchPlacement: 'bottom',
      ariaLabel: 'Baloise',
      htmlTitle: 'Baloise',
      href: 'http://www.baloise.ch',
      target: '_blank'
    },
    ...
  ]
  ```

### Patch Changes

- [#1095](https://github.com/baloise/design-system/pull/1095) - The month list in the `date picker` now accurately displays the current month, ensuring precise date selection, and effectively manages disabled states within specified date ranges.

- Updated dependencies []:
  - @baloise/design-system-css@14.2.0
  - @baloise/design-system-fonts@14.2.0
  - @baloise/design-system-icons@14.2.0
  - @baloise/design-system-tokens@14.2.0

## 14.1.0

### Minor Changes

- [#1090](https://github.com/baloise/design-system/pull/1090) - Adjust the font size of `bal-field-label` and explore an expanded range of size variations for `bal-label`, offering increased flexibility in styling options.

### Patch Changes

- Updated dependencies []:
  - @baloise/design-system-css@14.1.0
  - @baloise/design-system-fonts@14.1.0
  - @baloise/design-system-icons@14.1.0
  - @baloise/design-system-tokens@14.1.0

## 14.0.5

### Patch Changes

- [#1084](https://github.com/baloise/design-system/pull/1084) - The number input pattern regex no longer returns a pattern mismatch. Additionally, the pattern attribute can be overridden.

- Updated dependencies []:
  - @baloise/design-system-css@14.0.5
  - @baloise/design-system-fonts@14.0.5
  - @baloise/design-system-icons@14.0.5
  - @baloise/design-system-tokens@14.0.5

## 14.0.4

### Patch Changes

- [#1082](https://github.com/baloise/design-system/pull/1082) - The number input pattern regex no longer returns a pattern mismatch. Additionally, the pattern attribute can be overridden.

- Updated dependencies []:
  - @baloise/design-system-css@14.0.4
  - @baloise/design-system-fonts@14.0.4
  - @baloise/design-system-icons@14.0.4
  - @baloise/design-system-tokens@14.0.4

## 14.0.3

### Patch Changes

- Updated dependencies []:
  - @baloise/design-system-css@14.0.3
  - @baloise/design-system-fonts@14.0.3
  - @baloise/design-system-icons@14.0.3
  - @baloise/design-system-tokens@14.0.3

## 14.0.2

### Patch Changes

- [#1055](https://github.com/baloise/design-system/pull/1055) - Adjust the opacity of the modal backdrop color, changing it from 0.8 to 0.6.

- [#1072](https://github.com/baloise/design-system/pull/1072) - The arrow position in the navigation popover has been adjusted, and the CSS utility class 'container' has been removed from the navigation component.

- [#1047](https://github.com/baloise/design-system/pull/1047) - Resize the tags within the input group to align with those of bal-select.

- [#1054](https://github.com/baloise/design-system/pull/1054) - Modify the badge width for extended content length.

- [#1074](https://github.com/baloise/design-system/pull/1074) - The BreakpointService will now only respond to state changes, thereby mitigating the Angular error `NG0101: ApplicationRef.tick is called recursively`. Furthermore, the injection of ngControl has been set as optional to prevent the NullInjector Warning.

- Updated dependencies []:
  - @baloise/design-system-css@14.0.2
  - @baloise/design-system-fonts@14.0.2
  - @baloise/design-system-icons@14.0.2
  - @baloise/design-system-tokens@14.0.2

## 14.0.1

### Patch Changes

- [`af2c20f52`](https://github.com/baloise/design-system/commit/af2c20f520d1978df0547be5767803ead6d66ed4) - Raise the z-index value of the toast to ensure it overlays a modal.

- Updated dependencies [[`af2c20f52`](https://github.com/baloise/design-system/commit/af2c20f520d1978df0547be5767803ead6d66ed4)]:
  - @baloise/design-system-tokens@14.0.1
  - @baloise/design-system-css@14.0.1
  - @baloise/design-system-fonts@14.0.1
  - @baloise/design-system-icons@14.0.1

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

### Minor Changes

- [#940](https://github.com/baloise/design-system/pull/940) - Introducing the new and optimized `bal-nav` component. Designed for enhanced SEO and performance,
  it will replace the `bar-navigation` component in the upcoming breaking version release.

- [#1041](https://github.com/baloise/design-system/pull/1041) - The size of the logo component(in the navbar too) can be manually set to either 'normal' or 'small', allowing for manual adjustment and overriding the automatic responsive selection.

- [#940](https://github.com/baloise/design-system/pull/940) - add new component popup

- [#1040](https://github.com/baloise/design-system/pull/1040) - Introduce a new 'X' icon and replace the existing Twitter icon with the new one (X).

- [#1041](https://github.com/baloise/design-system/pull/1041) - The display of the checkbox component can be switched to 'inline'. This feature proves particularly useful for table integrations.

- [#1041](https://github.com/baloise/design-system/pull/1041) - The pagination component offers alignment options: 'start', 'center' (default), and 'end'. Additionally, the size can be adjusted to 'small' or 'normal' (default).

### Patch Changes

- [#1044](https://github.com/baloise/design-system/pull/1044) - Send the `balBlur` event only when the group of radios or checkboxes is left.

- [#1013](https://github.com/baloise/design-system/pull/1013) - To enhance the user experience during page navigation, the pagination component will now maintain a consistent width.

- [#1050](https://github.com/baloise/design-system/pull/1050) - The scroll handler will now only scroll on disconnection when it is disabled.

- [#940](https://github.com/baloise/design-system/pull/940) - Refine the appearance of disabled small controls on the pagination.

- Updated dependencies [[`01cfd5654`](https://github.com/baloise/design-system/commit/01cfd56549b2b602bb684c0b46d26d5262bd183b), [`c7224e882`](https://github.com/baloise/design-system/commit/c7224e882e0150b6de84772c52bb7c6eb2d724d4), [`0c9eea8ec`](https://github.com/baloise/design-system/commit/0c9eea8ec9492f1eaa0e1ff536fbccb09c56f8fc)]:
  - @baloise/design-system-tokens@14.0.0
  - @baloise/design-system-css@14.0.0
  - @baloise/design-system-icons@14.0.0
  - @baloise/design-system-fonts@14.0.0

## 13.7.1

### Patch Changes

- [#1037](https://github.com/baloise/design-system/pull/1037) - fix types errors

- Updated dependencies []:
  - @baloise/design-system-css@13.7.1
  - @baloise/design-system-fonts@13.7.1
  - @baloise/design-system-icons@13.7.1
  - @baloise/design-system-tokens@13.7.1

## 13.7.0

### Minor Changes

- [#877](https://github.com/baloise/design-system/pull/877) - Enhance the newly refactored `bal-date` components. `bal-datepicker` is marked as deprecated.

- [#999](https://github.com/baloise/design-system/pull/999) - Implement the tooltip component.

- [#1033](https://github.com/baloise/design-system/pull/1033) - Implement a reverse layout option for the stack component.

### Patch Changes

- [#1008](https://github.com/baloise/design-system/pull/1008) - Hide the tab line when no active tab is present.

- [#1007](https://github.com/baloise/design-system/pull/1007) - Relocate sticky footer styles to the core CSS file and update 'bal-app' for Vue applications.

- [#1001](https://github.com/baloise/design-system/pull/1001) - Include accessibility (a11y) labels for both the accordion and pagination components.

- [#1033](https://github.com/baloise/design-system/pull/1033) - The datepicker, select, and number-input components trigger a blur event when they lose focus or when any associated pop-up or dropdown is closed. Additionally, the blur event occurs after the value change.

- [#1025](https://github.com/baloise/design-system/pull/1025) - Implement a 'scroll to top' feature upon toggling the mobile navbar to prevent any space between the navbar brand and the menu.

- [#1033](https://github.com/baloise/design-system/pull/1033) - Addressed event propagation issues and refined the event sequence for the number-input component.

- [#1014](https://github.com/baloise/design-system/pull/1014) - Verify if a checkbox is selected within a group.

- [#881](https://github.com/baloise/design-system/pull/881) - Ensure that `aria-labelledby` is correctly linked to the appropriate label, and that the `for` attribute corresponds to the correct input.

- [#1027](https://github.com/baloise/design-system/pull/1027) - Resolve pattern issue with the number-input component.

- Updated dependencies [[`bfd7493b2`](https://github.com/baloise/design-system/commit/bfd7493b2263cd62929f6e5f1421e914cbe6efbd)]:
  - @baloise/design-system-css@13.7.0
  - @baloise/design-system-fonts@13.7.0
  - @baloise/design-system-icons@13.7.0
  - @baloise/design-system-tokens@13.7.0

## 13.6.2

### Patch Changes

- [#995](https://github.com/baloise/design-system/pull/995) - file-upload input handles every change event to detect duplicated files

- Updated dependencies []:
  - @baloise/design-system-css@13.6.2
  - @baloise/design-system-fonts@13.6.2
  - @baloise/design-system-icons@13.6.2
  - @baloise/design-system-tokens@13.6.2

## 13.6.1

### Patch Changes

- [#990](https://github.com/baloise/design-system/pull/990) - add a11y labels to close component

- [#993](https://github.com/baloise/design-system/pull/993) - radio and checkbox groups update children on runtime

- [#988](https://github.com/baloise/design-system/pull/988) - file-upload input handles every change event to detect duplicated files

- Updated dependencies []:
  - @baloise/design-system-css@13.6.1
  - @baloise/design-system-fonts@13.6.1
  - @baloise/design-system-icons@13.6.1
  - @baloise/design-system-tokens@13.6.1

## 13.6.0

### Minor Changes

- [#984](https://github.com/baloise/design-system/pull/984) - hide svg from screen readers

- [#976](https://github.com/baloise/design-system/pull/976) - add new tertiary button with a themed option

### Patch Changes

- [#984](https://github.com/baloise/design-system/pull/984) - add role progressbar to spinner

- Updated dependencies [[`2742f1175`](https://github.com/baloise/design-system/commit/2742f1175a0758413cc03d01ad9f031c8f92c4dc), [`2742f1175`](https://github.com/baloise/design-system/commit/2742f1175a0758413cc03d01ad9f031c8f92c4dc), [`de4626053`](https://github.com/baloise/design-system/commit/de46260536aa3e53e0aa7cf96796a7566f08177f), [`de4626053`](https://github.com/baloise/design-system/commit/de46260536aa3e53e0aa7cf96796a7566f08177f)]:
  - @baloise/design-system-icons@13.6.0
  - @baloise/design-system-css@13.6.0
  - @baloise/design-system-fonts@13.6.0
  - @baloise/design-system-tokens@13.6.0

## 13.5.0

### Minor Changes

- [#958](https://github.com/baloise/design-system/pull/958) - accordion trigger accepts color and size to set for the button

### Patch Changes

- [#958](https://github.com/baloise/design-system/pull/958) - accordion sets initial active state

- [#959](https://github.com/baloise/design-system/pull/959) - list title and subtitle have text align left

- [#960](https://github.com/baloise/design-system/pull/960) - select validates after blur on button and input

- Updated dependencies []:
  - @baloise/design-system-css@13.5.0
  - @baloise/design-system-fonts@13.5.0
  - @baloise/design-system-icons@13.5.0
  - @baloise/design-system-tokens@13.5.0

## 13.4.4

### Patch Changes

- [#936](https://github.com/baloise/design-system/pull/936) - enable bal-steps item state to be changed dynamically during component life

- [#938](https://github.com/baloise/design-system/pull/938) - number-inputs attribute pattern no longer shows undefined

- Updated dependencies []:
  - @baloise/design-system-css@13.4.4
  - @baloise/design-system-fonts@13.4.4
  - @baloise/design-system-icons@13.4.4
  - @baloise/design-system-tokens@13.4.4

## 13.4.3

### Patch Changes

- [#927](https://github.com/baloise/design-system/pull/927) - create unique ids for tab items

- [#920](https://github.com/baloise/design-system/pull/920) - handle ResizeObserver callback inside a AnimationFrame

- [#922](https://github.com/baloise/design-system/pull/922) - rename event to ev to prevent reference errors

- [#927](https://github.com/baloise/design-system/pull/927) - pass alt tag to stage-image and carousel image

- Updated dependencies []:
  - @baloise/design-system-css@13.4.3
  - @baloise/design-system-fonts@13.4.3
  - @baloise/design-system-icons@13.4.3
  - @baloise/design-system-tokens@13.4.3

## 13.4.2

### Patch Changes

- [#916](https://github.com/baloise/design-system/pull/916) - check if window is defined

- Updated dependencies []:
  - @baloise/design-system-css@13.4.2
  - @baloise/design-system-fonts@13.4.2
  - @baloise/design-system-icons@13.4.2
  - @baloise/design-system-tokens@13.4.2

## 13.4.1

### Patch Changes

- [#912](https://github.com/baloise/design-system/pull/912) - fix steps carousel option for mobile breakpoint

- [#913](https://github.com/baloise/design-system/pull/913) - fix label overflow on vertical tabs

- Updated dependencies []:
  - @baloise/design-system-css@13.4.1
  - @baloise/design-system-fonts@13.4.1
  - @baloise/design-system-icons@13.4.1
  - @baloise/design-system-tokens@13.4.1

## 13.4.0

### Minor Changes

- [#897](https://github.com/baloise/design-system/pull/897) - add free-solo variant to bal-select. hides trigger icon

### Patch Changes

- [#899](https://github.com/baloise/design-system/pull/899) - fix bal-close state background colors and remove unnecessary customization variables

- [#897](https://github.com/baloise/design-system/pull/897) - fix loading state for datepicker and select

- Updated dependencies []:
  - @baloise/design-system-css@13.4.0
  - @baloise/design-system-fonts@13.4.0
  - @baloise/design-system-icons@13.4.0
  - @baloise/design-system-tokens@13.4.0

## 13.3.1

### Patch Changes

- [#891](https://github.com/baloise/design-system/pull/891) - border of the vertical tabs will not be 100% height and content stretches to the whole width.

- [#892](https://github.com/baloise/design-system/pull/892) - heading content can break in bal-file-upload

- [#889](https://github.com/baloise/design-system/pull/889) - label content can break

- [#887](https://github.com/baloise/design-system/pull/887) - carousel uses computed width instead of rounded client width

- [#885](https://github.com/baloise/design-system/pull/885) - fix carousel resize listener, improves tabs overflow option.

- Updated dependencies []:
  - @baloise/design-system-css@13.3.1
  - @baloise/design-system-fonts@13.3.1
  - @baloise/design-system-icons@13.3.1
  - @baloise/design-system-tokens@13.3.1

## 13.3.0

### Minor Changes

- [#834](https://github.com/baloise/design-system/pull/834) - add new css variables for theming to components and css-framework

  - bal-card
  - bal-radio
  - bal-checkbox
  - bal-navbar
  - bal-tag
  - bal-time-input
  - bal-button
  - bal-text
  - bal-heading
  - bal-label
  - bal-datepicker
  - bal-modal
  - bal-hint
  - bal-divider
  - bal-sheet
  - bal-select
  - bal-carousel
  - bal-data
  - bal-list
  - bal-popover
  - bal-stage
  - bal-footer
  - bal-pagination
  - bal-close
  - bal-steps
  - bal-tabs
  - bal-toast
  - bal-snackbar
  - bal-notification

### Patch Changes

- [#849](https://github.com/baloise/design-system/pull/849) - improved performance of the utils

- Updated dependencies []:
  - @baloise/design-system-css@13.3.0
  - @baloise/design-system-fonts@13.3.0
  - @baloise/design-system-icons@13.3.0
  - @baloise/design-system-tokens@13.3.0

## 13.2.1

### Patch Changes

- [#836](https://github.com/baloise/design-system/pull/836) [`d15d31f84`](https://github.com/baloise/design-system/commit/d15d31f847dd7dfd3b1d2e083cba058df1b37229) Thanks [@hirsch88](https://github.com/hirsch88)! - fix gatsby build

- [#841](https://github.com/baloise/design-system/pull/841) [`3daa7fd9e`](https://github.com/baloise/design-system/commit/3daa7fd9e13985bf731da4e65ac70775f388b97f) Thanks [@hirsch88](https://github.com/hirsch88)! - fix accordion active prop watcher

- Updated dependencies []:
  - @baloise/design-system-css@13.2.1
  - @baloise/design-system-fonts@13.2.1
  - @baloise/design-system-icons@13.2.1
  - @baloise/design-system-tokens@13.2.1

## 13.2.0

### Minor Changes

- [#832](https://github.com/baloise/design-system/pull/832) [`33a99a667`](https://github.com/baloise/design-system/commit/33a99a667cb312e3bdc000baf3068a8f9f1b2b1c) Thanks [@github-actions](https://github.com/apps/github-actions)! - add progress-bar component

### Patch Changes

- [#829](https://github.com/baloise/design-system/pull/829) [`458564b23`](https://github.com/baloise/design-system/commit/458564b235adec25efd819a46ec4a0c6034d2221) Thanks [@github-actions](https://github.com/apps/github-actions)! - add theming to the bal-icon

- Updated dependencies []:
  - @baloise/design-system-css@13.2.0
  - @baloise/design-system-fonts@13.2.0
  - @baloise/design-system-icons@13.2.0
  - @baloise/design-system-tokens@13.2.0

## 13.1.0

### Minor Changes

- [`8aba416f2`](https://github.com/baloise/design-system/commit/8aba416f22901fb8eb3cfb5d751ef1d144caa820) Thanks [@hirsch88](https://github.com/hirsch88)! - add new colors to the badge component

- [#831](https://github.com/baloise/design-system/pull/831) [`da3782269`](https://github.com/baloise/design-system/commit/da3782269b79a4524e897b82116fb64cd588b6ea) Thanks [@hirsch88](https://github.com/hirsch88)! - add new orientation utils

- [#828](https://github.com/baloise/design-system/pull/828) [`eb7c79c62`](https://github.com/baloise/design-system/commit/eb7c79c62554cdffaa781e77e85371899d01ed25) Thanks [@hirsch88](https://github.com/hirsch88)! - add auto-level to heading component to shrink the visual level until it fits.

### Patch Changes

- [#782](https://github.com/baloise/design-system/pull/782) [`31fe21972`](https://github.com/baloise/design-system/commit/31fe219724109af104e02cba89d11166e6dc67cf) Thanks [@github-actions](https://github.com/apps/github-actions)! - add visual tests for the css framework

- Updated dependencies []:
  - @baloise/design-system-css@13.1.0
  - @baloise/design-system-fonts@13.1.0
  - @baloise/design-system-icons@13.1.0
  - @baloise/design-system-tokens@13.1.0

## 13.0.0

### Major Changes

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - improved scroll handler blocks scrolling with only CSS.
  With that we are able to remember the last scroll position of the user.

  **before**

  ```typescript
  const scrollHandler = BodyScrollBlocker()
  this.bodyScrollBlocker.block()
  this.bodyScrollBlocker.allow()
  ```

  **after**

  Rename the handler to `ScrollHandler` and call the `connect` function to
  connect the handler to the target element (Default is document). `block` and `allow` have been
  renamed to `disable` and `enable`. The new function `disconnect` removes all
  the defined event listeners and resets the handler.

  ```typescript
  const scrollHandler = ScrollHandler()

  // can also pass in a custom element instead of using document
  scrollHandler.connect()
  scrollHandler.disable()
  scrollHandler.enable()
  scrollHandler.disconnect()
  ```

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - The namespaces Props and Events are renamed to BalProps and BalEvents.
  As long as the packages `@baloise/design-system-components` is imported into your project
  you have direct access to the new namespaces.

  #### With Props

  **before**

  ```typescript
  import { Props } from '@baloise/design-system-components'

  const myColor: Props.BalButtonColor = 'primary'
  ```

  **after**

  ```typescript
  const myColor: BalProps.BalButtonColor = 'primary'
  ```

  #### With Events

  **before**

  ```typescript
  import type { Events } from "@baloise/design-system-components"

  const onChange = (event: Events.BalAccordionChange) => {
    const myAccordion = event.target // type => EventTarget
    const myDetail = event.detail // type => boolean
    ...
  }
  ```

  **after**

  ```typescript
  const onChange = (event: BalEvents.BalAccordionChange) => {
    const myAccordion = event.target // type => HTMLBalAccordion
    const myDetail = event.detail // type => boolean
    ...
  }
  ```

  All component types are now located in the component folders `*.interfaces.ts` file.

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - add new `steps` component with options property and overflow solution

  **before**

  ```html
  <bal-tabs interface="o-steps" value="tab-a">
    <bal-tab-item done value="tab-a" label="Tab A">Content of Tab A</bal-tab-item>
  </bal-tabs>
  ```

  **after**

  The interface of the components are the same as before.
  Only the tag names of the component changed and to pass the `interface` property is not needed anymore.

  ```html
  <bal-steps value="tab-a">
    <bal-step-item done value="tab-a" label="Tab A">Content of Tab A</bal-step-item>
  </bal-steps>
  ```

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - update dependency stencil to v3.

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - Remove inverted property from bal-stage, bal-datepicker, bal-input, bal-textarea.

  Inverted property is removed because is not supported in our new rebranded style.

  Components that are affected are:

  | Component        | Property |
  | :--------------- | :------- |
  | `bal-stage`      | inverted |
  | `bal-datepicker` | inverted |
  | `bal-input`      | inverted |
  | `bal-textarea`   | inverted |

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - accordion & popover renamed property `value` to `active`, since they are not considered as a form control component.

  **before**

  ```html
  <bal-accordion value="true">My hidden Content</bal-accordion>
  ```

  **after**

  ```html
  <bal-accordion active="true">My hidden Content</bal-accordion>
  ```

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - remove deprecated global component styles.
  Component styles will be loaded lazy to optimize the speed of the first render, there for only import the needed CSS files.

  #### Global import

  The global import of the main styles and his utility classes move to the CSS framework.

  **before**

  ```scss
  @import '@baloise/design-system-components/src/styles/global';
  ```

  **after**

  With the solution we are able to add only what we need.

  ```scss
  // SASS mixins and variables
  @import '@baloise/design-system-css/sass/mixins';

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

  #### Component utilities import

  The location of the `variable` & `mixins` has changed to `@baloise/design-system-css/sass/mixins`.

  **before**

  ```scss
  @import '@baloise/design-system-components/src/styles/global.utilities';
  ```

  **after**

  ```scss
  @import '@baloise/design-system-css/sass/mixins';
  ```

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - .title, bal-heading, bal-text and bal-label inherit default color

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

### Minor Changes

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - add `border` property to bal-carousel to show a light border at the bottom.

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - add more alignment options and add padding properties to the bal-stack

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - add no-wrap option to typography components to cut long text with ellipse

- [#806](https://github.com/baloise/design-system/pull/806) [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c) Thanks [@hirsch88](https://github.com/hirsch88)! - add new component divider

### Patch Changes

- Updated dependencies [[`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c), [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c), [`95f127928`](https://github.com/baloise/design-system/commit/95f12792866f62a40ade705316587d475c4aa37c)]:
  - @baloise/design-system-css@13.0.0
  - @baloise/design-system-tokens@13.0.0
  - @baloise/design-system-fonts@13.0.0
  - @baloise/design-system-icons@13.0.0

## 12.13.1

### Patch Changes

- [#815](https://github.com/baloise/design-system/pull/815) [`55e69fdf0`](https://github.com/baloise/design-system/commit/55e69fdf07a37c32a0f85c8f0a9bd492c0629f74) Thanks [@hirsch88](https://github.com/hirsch88)! - fix scroll handler by using css to keep it as smooth as possible

- [#815](https://github.com/baloise/design-system/pull/815) [`55e69fdf0`](https://github.com/baloise/design-system/commit/55e69fdf07a37c32a0f85c8f0a9bd492c0629f74) Thanks [@hirsch88](https://github.com/hirsch88)! - add missing download property to the bal-list-item

- Updated dependencies []:
  - @baloise/design-system-css@12.13.1
  - @baloise/design-system-fonts@12.13.1
  - @baloise/design-system-icons@12.13.1
  - @baloise/design-system-tokens@12.13.1

## 12.13.0

### Minor Changes

- [#808](https://github.com/baloise/design-system/pull/808) [`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe) Thanks [@github-actions](https://github.com/apps/github-actions)! - more space values are available for the bal-stack component

- [#779](https://github.com/baloise/design-system/pull/779) [`14990cf12`](https://github.com/baloise/design-system/commit/14990cf12e7925544d758ff77493488dba84a0b9) Thanks [@github-actions](https://github.com/apps/github-actions)! - badge supports theming

- [#808](https://github.com/baloise/design-system/pull/808) [`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe) Thanks [@github-actions](https://github.com/apps/github-actions)! - bal-popover has new property `auto-trigger`, which automatically opens the popover content on a click on the trigger element.

### Patch Changes

- [#808](https://github.com/baloise/design-system/pull/808) [`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe) Thanks [@github-actions](https://github.com/apps/github-actions)! - typography elements inherit default color from parent element

- [#808](https://github.com/baloise/design-system/pull/808) [`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe) Thanks [@github-actions](https://github.com/apps/github-actions)! - footer improve loading links only in idle mode

- [#808](https://github.com/baloise/design-system/pull/808) [`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe) Thanks [@github-actions](https://github.com/apps/github-actions)! - bal-accordion updates state after value was changed

- [#808](https://github.com/baloise/design-system/pull/808) [`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe) Thanks [@github-actions](https://github.com/apps/github-actions)! - bal-stack normalizes margins of the child elements and expands over the whole width

- Updated dependencies [[`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe), [`69115d725`](https://github.com/baloise/design-system/commit/69115d725815663c12a65e92d8f0f40f10c7eafe)]:
  - @baloise/design-system-css@12.13.0
  - @baloise/design-system-fonts@12.13.0
  - @baloise/design-system-icons@12.13.0
  - @baloise/design-system-tokens@12.13.0

## 12.12.0

### Minor Changes

- [#1253](https://github.com/baloise-incubator/design-system/pull/1253) [`b0992bdc5`](https://github.com/baloise-incubator/design-system/commit/b0992bdc55f4ba98f770745546b770bcebde9056) Thanks [@hirsch88](https://github.com/hirsch88)! - Use JavaScript to prevent scrolling instead of CSS to remember to user scroll position.

- [#1240](https://github.com/baloise-incubator/design-system/pull/1240) [`bf9634662`](https://github.com/baloise-incubator/design-system/commit/bf963466275cfaeffba82c2310c9b2ff690eb2ef) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - add missing selectors with data-testid in testing library

- [#1252](https://github.com/baloise-incubator/design-system/pull/1252) [`302c0f7c4`](https://github.com/baloise-incubator/design-system/commit/302c0f7c46d3fdf4da730a5f5ff8f22e9ee74267) Thanks [@hirsch88](https://github.com/hirsch88)! - improve accordion structure to a more flexible solution.

  **old**

  The old button accordion solution is still active.

  ```html
  <bal-accordion>
    <p class="py-medium">Hidden content</p>
  </bal-accordion>
  ```

  **new**

  In the new structure the header of the accordion can be designed as the situation demands it.

  ```html
  <bal-accordion>
    <bal-accordion-details>
      <p class="py-medium">Hidden content</p>
    </bal-accordion-details>
    <bal-accordion-summary>
      My custom header
      <bal-accordion-trigger></bal-accordion-trigger>
    </bal-accordion-summary>
  </bal-accordion>
  ```

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

### Patch Changes

- [#1249](https://github.com/baloise-incubator/design-system/pull/1249) [`c0b500bf7`](https://github.com/baloise-incubator/design-system/commit/c0b500bf7f48cc3a81041c0ccd8aec60d546c04a) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - trigger balChange on empty value when min and max props are set

  enable dates who are in the range when switching the year and min and max prop are set

- [#1244](https://github.com/baloise-incubator/design-system/pull/1244) [`73bb7e173`](https://github.com/baloise-incubator/design-system/commit/73bb7e1738bfd215cb8b47fce04fdaba5ba26e09) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - fix the datepicker by allowing the separators to be entered even when day or month which are 0-9 are entered without the 0 in front (e.g 2/2/2022)

- Updated dependencies [[`f9144f085`](https://github.com/baloise-incubator/design-system/commit/f9144f08528edd3dc58a17366a4426198b42410f)]:
  - @baloise/design-system-tokens@12.12.0
  - @baloise/design-system-css@12.12.0
  - @baloise/design-system-fonts@12.12.0
  - @baloise/design-system-icons@12.12.0

## 12.11.0

### Minor Changes

- [#1232](https://github.com/baloise/design-system/pull/1232) [`2e3437cca`](https://github.com/baloise/design-system/commit/2e3437ccadcb52774266d43085488d28a72783b6) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - improve datepicker user input by automatically adding the date separators between day and month and month and a year

### Patch Changes

- [#1230](https://github.com/baloise/design-system/pull/1230) [`0952e9121`](https://github.com/baloise/design-system/commit/0952e9121d45dffb7697995a3fa9ad14fff5e173) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - enable dot(.) as a decimal separator for a BE region

- [#1225](https://github.com/baloise/design-system/pull/1225) [`f167ba3a6`](https://github.com/baloise/design-system/commit/f167ba3a648c8a26b1554baee0ed5ff4def044f3) Thanks [@hirsch88](https://github.com/hirsch88)! - reduce payload by providing tslib import helpers

- [#1235](https://github.com/baloise/design-system/pull/1235) [`74b7736bb`](https://github.com/baloise/design-system/commit/74b7736bbc5a8a37b4871f5184216cb3cd6f6a5c) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - enable bal-time-input to be able to use for angular reactive forms

- Updated dependencies [[`884b91285`](https://github.com/baloise/design-system/commit/884b91285953a2f8b078b0e4a69b43649bc3af3e)]:
  - @baloise/design-system-css@12.11.0
  - @baloise/design-system-fonts@12.11.0
  - @baloise/design-system-icons@12.11.0
  - @baloise/design-system-tokens@12.11.0

## 12.10.0

### Patch Changes

- [#1222](https://github.com/baloise/design-system/pull/1222) [`9fdf176ac`](https://github.com/baloise/design-system/commit/9fdf176ac82e6ac378200cf83928c98e61a3fe9e) Thanks [@hirsch88](https://github.com/hirsch88)! - fix waitForDesignSystem helper for unit testing

- [#1221](https://github.com/baloise/design-system/pull/1221) [`ee0a5094d`](https://github.com/baloise/design-system/commit/ee0a5094d700197f6e110ded0607964a1bb8646f) Thanks [@hirsch88](https://github.com/hirsch88)! - inherit color for link elements

- [#1219](https://github.com/baloise/design-system/pull/1219) [`2d3ade3e5`](https://github.com/baloise/design-system/commit/2d3ade3e54cf919f4f2ad9323b5be8cd683a1c64) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - fix error on clearing input with claim-number mask

- Updated dependencies [[`ee0a5094d`](https://github.com/baloise/design-system/commit/ee0a5094d700197f6e110ded0607964a1bb8646f)]:
  - @baloise/design-system-css@12.10.0
  - @baloise/design-system-fonts@12.10.0
  - @baloise/design-system-icons@12.10.0
  - @baloise/design-system-tokens@12.10.0

## 12.9.0

### Minor Changes

- [#1206](https://github.com/baloise/design-system/pull/1206) [`47c1e79a2`](https://github.com/baloise/design-system/commit/47c1e79a2cf955948a08acf6fbae936a08d44479) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - add social media links in footer component

- [#1167](https://github.com/baloise/design-system/pull/1167) [`855e6cbf5`](https://github.com/baloise/design-system/commit/855e6cbf5f23a822ac6c3e59a528154730ae6913) Thanks [@JasperDeLanghe](https://github.com/JasperDeLanghe)! - new form component bal-time-input added

- [#1192](https://github.com/baloise/design-system/pull/1192) [`8a0dbc5af`](https://github.com/baloise/design-system/commit/8a0dbc5af1347904a6d79e317408ebea056aac1a) Thanks [@hirsch88](https://github.com/hirsch88)! - We introduced a new way of adding a options to the bal-radio-group and bal-checkbox-group
  by introducing the `options` property in which options can be passed using a Javascript.

  **bal-radio-group**

  ```html
  <bal-radio-group [options]="options"></bal-radio-group>
  ```

  ```typescript
  import { newBalRadioOption } from '@baloise/design-system-components'

  @Component({
    selector: 'app-example-component',
    templateUrl: './example-component.component.html',
  })
  export class ExampleComponent {
    options = [
      newBalRadioOption({ label: 'Label 1', value: '1' }),
      newBalRadioOption({
        label: () => 'Label with <a class="is-link" href="http://baloise.com">Link</a>',
        value: '2',
      }),
    ]
  }
  ```

  **bal-checkbox-group**

  To use the `bal-checkbox-group` with options we also need to set `control` attribute to true.

  ```html
  <bal-checkbox-group control [options]="options"></bal-checkbox-group>
  ```

  ```typescript
  import { newBalCheckboxOption } from '@baloise/design-system-components'

  @Component({
    selector: 'app-example-component',
    templateUrl: './example-component.component.html',
  })
  export class ExampleComponent {
    options = [
      newBalCheckboxOption({ value: '1', label: 'Label 1' }),
      newBalCheckboxOption({
        value: '2',
        label: () => 'Label with <a class="is-link" href="http://baloise.com">Link</a>',
      }),
    ]
  }
  ```

- [#1185](https://github.com/baloise/design-system/pull/1185) [`fff4c722a`](https://github.com/baloise/design-system/commit/fff4c722a0993ef59c088157286ec1114fc1fde1) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - added modal property backdropDismiss so the user can decide if modal can be closed on backdrop click or not

### Patch Changes

- [#1203](https://github.com/baloise/design-system/pull/1203) [`c89fd1312`](https://github.com/baloise/design-system/commit/c89fd13125a928195442e6ee22e28632d66dd95d) Thanks [@hirsch88](https://github.com/hirsch88)! - improve build config to support stackblitz with angular

- [#1195](https://github.com/baloise/design-system/pull/1195) [`c2db6927d`](https://github.com/baloise/design-system/commit/c2db6927dfe29c2942d6dacb78a39d8930364064) Thanks [@hirsch88](https://github.com/hirsch88)! - fix for bal-select usage in modal with selectionOptional

- Updated dependencies [[`78b00ba20`](https://github.com/baloise/design-system/commit/78b00ba2042172ea23fe8827a60292c167d38e4c), [`78b00ba20`](https://github.com/baloise/design-system/commit/78b00ba2042172ea23fe8827a60292c167d38e4c), [`78b00ba20`](https://github.com/baloise/design-system/commit/78b00ba2042172ea23fe8827a60292c167d38e4c), [`78b00ba20`](https://github.com/baloise/design-system/commit/78b00ba2042172ea23fe8827a60292c167d38e4c)]:
  - @baloise/design-system-tokens@12.9.0
  - @baloise/design-system-css@12.9.0
  - @baloise/design-system-fonts@12.9.0
  - @baloise/design-system-icons@12.9.0

## 12.8.2

### Patch Changes

- [`ab352d875`](https://github.com/baloise/design-system/commit/ab352d8755332f0c8adc4801e3d5c7c391bb8f27) Thanks [@hirsch88](https://github.com/hirsch88)! - alert colors synchronized in bal-badge, bal-card, bal-tag and bal-button to fix accessibility issues.

- Updated dependencies [[`ab352d875`](https://github.com/baloise/design-system/commit/ab352d8755332f0c8adc4801e3d5c7c391bb8f27)]:
  - @baloise/design-system-tokens@12.8.2
  - @baloise/design-system-css@12.8.2
  - @baloise/design-system-fonts@12.8.2
  - @baloise/design-system-icons@12.8.2

## 12.8.1

### Patch Changes

- [#1182](https://github.com/baloise/design-system/pull/1182) [`38f0a7fd4`](https://github.com/baloise/design-system/commit/38f0a7fd492927a49e811e1b0461ed39ebe057d4) Thanks [@hirsch88](https://github.com/hirsch88)! - adjust package.json to npm workspace structure and move contact.js to components dependencies

- Updated dependencies [[`38f0a7fd4`](https://github.com/baloise/design-system/commit/38f0a7fd492927a49e811e1b0461ed39ebe057d4)]:
  - @baloise/design-system-tokens@12.8.1
  - @baloise/design-system-fonts@12.8.1
  - @baloise/design-system-icons@12.8.1
  - @baloise/design-system-css@12.8.1

## 12.8.0

### Minor Changes

- [#1153](https://github.com/baloise/design-system/pull/1153) [`b230a279d`](https://github.com/baloise/design-system/commit/b230a279d61c5928570b39e537c0a7ba18df8677) Thanks [@hirsch88](https://github.com/hirsch88)! - add `waitForComponent` util function for component testing. This waits until the web-component tree has fully rendered.

  ```typescript
  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
  import { TestBed } from '@angular/core/testing'
  import { BrowserModule, By } from '@angular/platform-browser'
  import { BalCoreModule, BalInputModule } from '@baloise/design-system-components-angular'
  import { waitForComponent } from '@baloise/design-system-components'
  import { AppComponent } from './app.component'

  describe('AppComponent', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports: [BrowserModule, BalCoreModule.forRoot(), BalInputModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents()
    })

    it(`should render input value`, async () => {
      const fixture = TestBed.createComponent(AppComponent)
      fixture.detectChanges()
      await waitForComponent(fixture.nativeElement)
      const input = fixture.debugElement.query(By.css('[data-testid="input"]'))
      expect(input.nativeElement.value).toContain('My Value')
    })
  })
  ```

### Patch Changes

- [#1172](https://github.com/baloise/design-system/pull/1172) [`6f99084d9`](https://github.com/baloise/design-system/commit/6f99084d946491231bc8b4fe7d479f5dd3c86c8d) Thanks [@hirsch88](https://github.com/hirsch88)! - claimnumber accepts small x

- [#1174](https://github.com/baloise/design-system/pull/1174) [`d3ab0905d`](https://github.com/baloise/design-system/commit/d3ab0905d868e9a32a69d028efb544b28bbd5796) Thanks [@hirsch88](https://github.com/hirsch88)! - fix carousel items-per-view if not set to auto

- [#1174](https://github.com/baloise/design-system/pull/1174) [`a3a7c5f8f`](https://github.com/baloise/design-system/commit/a3a7c5f8f5953d3344fec22f63484e9cc6515b8f) Thanks [@hirsch88](https://github.com/hirsch88)! - add autoprefixer for css files to solve hyphen issue

- Updated dependencies [[`a3a7c5f8f`](https://github.com/baloise/design-system/commit/a3a7c5f8f5953d3344fec22f63484e9cc6515b8f)]:
  - @baloise/design-system-css@12.8.0
  - @baloise/design-system-fonts@12.8.0
  - @baloise/design-system-icons@12.8.0
  - @baloise/design-system-tokens@12.8.0

## 12.7.1

### Patch Changes

- [#1141](https://github.com/baloise/design-system/pull/1141) [`d53ea8a46`](https://github.com/baloise/design-system/commit/d53ea8a46196415d856c090f1a1258a64e23cc12) Thanks [@hirsch88](https://github.com/hirsch88)! - fix globalscripts for stackblitz

- [#1136](https://github.com/baloise/design-system/pull/1136) [`22389ae9b`](https://github.com/baloise/design-system/commit/22389ae9bdab2d65d68d77b6e65ef24793bfca2f) Thanks [@hirsch88](https://github.com/hirsch88)! - adjust deprecation warning with a better path

- Updated dependencies []:
  - @baloise/design-system-css@12.7.1
  - @baloise/design-system-fonts@12.7.1
  - @baloise/design-system-icons@12.7.1
  - @baloise/design-system-tokens@12.7.1

## 12.7.0

### Minor Changes

- [#1126](https://github.com/baloise/design-system/pull/1126) [`f944a0729`](https://github.com/baloise/design-system/commit/f944a0729daeb96ee9a36affecf572a7955c1e24) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - add yellow, red, purple and green colors to the navigation level block

### Patch Changes

- [#1128](https://github.com/baloise/design-system/pull/1128) [`a47518315`](https://github.com/baloise/design-system/commit/b28384b99c5831d592aeadbaf2888850946cfb8a) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - update @baloise/web-app-utils to 3.10.0

- [#1127](https://github.com/baloise/design-system/pull/1127) [`297d9c08b`](https://github.com/baloise/design-system/commit/297d9c08b3b08c4dbcd4b12fa5e28e587168dc25) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - fix focus and blur events in bal-checkbox

- Updated dependencies []:
  - @baloise/design-system-css@12.7.0
  - @baloise/design-system-fonts@12.7.0
  - @baloise/design-system-icons@12.7.0
  - @baloise/design-system-tokens@12.7.0

## 12.6.0

### Minor Changes

- [#1098](https://github.com/baloise/design-system/pull/1098) [`78ce9869c`](https://github.com/baloise/design-system/commit/78ce9869c1e071905ef11add4db3c30846a451cd) Thanks [@hirsch88](https://github.com/hirsch88)! - add vscode support for html elements and remove docs components from the build

  - [Configuring VS Code](https://stenciljs.com/docs/docs-vscode#configuring-vs-code)

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

- [#1102](https://github.com/baloise/design-system/pull/1102) [`0819f32ee`](https://github.com/baloise/design-system/commit/0819f32eeb69d5c34bfdd8b70f2bbc7cac960276) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - replace hammerjs lib with contactjs

- [#1084](https://github.com/baloise/design-system/pull/1084) [`a2258fd83`](https://github.com/baloise/design-system/commit/a2258fd8395160b3733af6e048e731b5ec52b02c) Thanks [@hirsch88](https://github.com/hirsch88)! - refactor global styles and move them to the components

- [#1101](https://github.com/baloise/design-system/pull/1101) [`af1560a6e`](https://github.com/baloise/design-system/commit/af1560a6e5ed5abb3bc8ae0f4e7cb1507464634d) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - use tokens in the components instead of hard coded css values

- [#1109](https://github.com/baloise/design-system/pull/1109) [`8bd20ac03`](https://github.com/baloise/design-system/commit/8bd20ac0313f799b0f98d5a029b62ba22bbf1929) Thanks [@hirsch88](https://github.com/hirsch88)! - add deepReady support to check all nested child elements

- [#1110](https://github.com/baloise/design-system/pull/1110) [`76e3abe72`](https://github.com/baloise/design-system/commit/76e3abe726614424ad9fffaefe872dd8683b7b9d) Thanks [@hirsch88](https://github.com/hirsch88)! - add lazy loading to all image elements

- [#1114](https://github.com/baloise/design-system/pull/1114) [`d2819d0cf`](https://github.com/baloise/design-system/commit/d2819d0cf3394a4d2e52b677ebbedde1670ebb1a) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - fix select typeahead closing on click

- Updated dependencies [[`a899f8102`](https://github.com/baloise/design-system/commit/a899f8102e0e8f4dc6c0f2ce8ce155357de80f32), [`af1560a6e`](https://github.com/baloise/design-system/commit/af1560a6e5ed5abb3bc8ae0f4e7cb1507464634d), [`26b23997c`](https://github.com/baloise/design-system/commit/26b23997c9c4fc72824a60fdf2928b1b82b62f26)]:
  - @baloise/design-system-css@12.6.0
  - @baloise/design-system-tokens@12.6.0
  - @baloise/design-system-fonts@12.6.0
  - @baloise/design-system-icons@12.6.0

## 12.5.0

### Minor Changes

- [#1050](https://github.com/baloise/design-system/pull/1050) [`355fc4f3c`](https://github.com/baloise/design-system/commit/355fc4f3cd13f4708b4d1a0f219658c3214df253) Thanks [@hirsch88](https://github.com/hirsch88)! - add container design tokens

- [#1096](https://github.com/baloise/design-system/pull/1096) [`b105c394d`](https://github.com/baloise/design-system/commit/b105c394d300f3f166c1d60effef3f737b34338b) Thanks [@hirsch88](https://github.com/hirsch88)! - activate Germany for the bal-footer

### Patch Changes

- [#1095](https://github.com/baloise/design-system/pull/1095) [`1c76e1de0`](https://github.com/baloise/design-system/commit/1c76e1de09388d16ee50fee89e4611b36096860c) Thanks [@hirsch88](https://github.com/hirsch88)! - enable form data submitting for bal-file-upload

- [#1066](https://github.com/baloise/design-system/pull/1066) [`5fdb9402f`](https://github.com/baloise/design-system/commit/5fdb9402fb1fc7105077144745311916c604892a) Thanks [@hirsch88](https://github.com/hirsch88)! - fix esm paths in package.json

- [#1086](https://github.com/baloise/design-system/pull/1086) [`7bc33b76f`](https://github.com/baloise/design-system/commit/7bc33b76f9c8cf9a1fc028a638679e8eb77ac3d4) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - adjust value and placeholder color contrast for disabled fields

- [#1069](https://github.com/baloise/design-system/pull/1069) [`30409ba0d`](https://github.com/baloise/design-system/commit/30409ba0d883f0e129480287bf741554cd61391a) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - close modal on click outside of it

- [#1071](https://github.com/baloise/design-system/pull/1071) [`bb9c2c08b`](https://github.com/baloise/design-system/commit/bb9c2c08b799eb79a7a90ff0bfa3da448f5deb0c) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - align box to the top when there is a long text in the checkbox

- [#1092](https://github.com/baloise/design-system/pull/1092) [`7f6f171bc`](https://github.com/baloise/design-system/commit/7f6f171bc558ea1fdbb9abb90ecb2f8e6da28692) Thanks [@hirsch88](https://github.com/hirsch88)! - bal-select only validate input when leaving the component

- Updated dependencies [[`355fc4f3c`](https://github.com/baloise/design-system/commit/355fc4f3cd13f4708b4d1a0f219658c3214df253), [`9f47b318c`](https://github.com/baloise/design-system/commit/9f47b318ca24af8de8dfc8c9ae1e612c231a1625), [`7bc33b76f`](https://github.com/baloise/design-system/commit/7bc33b76f9c8cf9a1fc028a638679e8eb77ac3d4)]:
  - @baloise/design-system-tokens@12.5.0
  - @baloise/design-system-css@12.5.0
  - @baloise/design-system-fonts@12.5.0
  - @baloise/design-system-icons@12.5.0

## 12.4.1

### Patch Changes

- [#1064](https://github.com/baloise/design-system/pull/1064) [`f98e22ae0`](https://github.com/baloise/design-system/commit/f98e22ae0db80f3b2ff911b101323e5f2c4e9cab) Thanks [@hirsch88](https://github.com/hirsch88)! - fix ESM global script file

- Updated dependencies []:
  - @baloise/design-system-css@12.4.1
  - @baloise/design-system-fonts@12.4.1
  - @baloise/design-system-icons@12.4.1
  - @baloise/design-system-tokens@12.4.1

## 12.4.0

### Minor Changes

- [#1057](https://github.com/baloise/design-system/pull/1057) [`2ecc85d08`](https://github.com/baloise/design-system/commit/2ecc85d0862020d55d77c3b92eeb77891d82f4c2) Thanks [@hirsch88](https://github.com/hirsch88)! - add prop contentSpace to bal-list-item-accordion-body to set space normal or none

### Patch Changes

- [#1057](https://github.com/baloise/design-system/pull/1057) [`2ecc85d08`](https://github.com/baloise/design-system/commit/2ecc85d0862020d55d77c3b92eeb77891d82f4c2) Thanks [@hirsch88](https://github.com/hirsch88)! - fix border color issue on list accordion

- [#1055](https://github.com/baloise/design-system/pull/1055) [`a5e161045`](https://github.com/baloise/design-system/commit/a5e161045ffc22fc928ede080426f8fe36c7c006) Thanks [@hirsch88](https://github.com/hirsch88)! - bal-radio style updates. Centering dot, expand on mobile & on expanded adjust height of items to the biggest item.

- [#1058](https://github.com/baloise/design-system/pull/1058) [`a17ed35cf`](https://github.com/baloise/design-system/commit/a17ed35cfefa3dace356b0768ed9fb0fc405cb64) Thanks [@hirsch88](https://github.com/hirsch88)! - fix to set bal-body to ready to avoid a white webpage on page load

- [#1058](https://github.com/baloise/design-system/pull/1058) [`282355d61`](https://github.com/baloise/design-system/commit/282355d61f9e07882fca65a02b0108fc9e712397) Thanks [@hirsch88](https://github.com/hirsch88)! - set focus primary border on invalid form controls

- [#1049](https://github.com/baloise/design-system/pull/1049) [`2222bc3c4`](https://github.com/baloise/design-system/commit/2222bc3c483aed8af5b5d7c3d380626ce2d4ca99) Thanks [@hirsch88](https://github.com/hirsch88)! - resolve duplicated identifiers on stackblitz

- Updated dependencies [[`282355d61`](https://github.com/baloise/design-system/commit/282355d61f9e07882fca65a02b0108fc9e712397)]:
  - @baloise/design-system-css@12.4.0
  - @baloise/design-system-fonts@12.4.0
  - @baloise/design-system-icons@12.4.0
  - @baloise/design-system-tokens@12.4.0

## 12.3.0

### Minor Changes

- [#1040](https://github.com/baloise/design-system/pull/1040) [`e3e9e91fd`](https://github.com/baloise/design-system/commit/e3e9e91fd51f43511c64f1519998c12da237ce45) Thanks [@hirsch88](https://github.com/hirsch88)! - add min and max to bal-number-input

- [#973](https://github.com/baloise/design-system/pull/973) [`16cf1e903`](https://github.com/baloise/design-system/commit/16cf1e90337861aca94a3b55dff6781647bc8757) Thanks [@hirsch88](https://github.com/hirsch88)! - add missing t-shirt sizes to bal-heading

### Patch Changes

- [#973](https://github.com/baloise/design-system/pull/973) [`378807722`](https://github.com/baloise/design-system/commit/378807722525e73c38d0d50bca2c2850490b4ab7) Thanks [@hirsch88](https://github.com/hirsch88)! - refactoring of the bal-list and the bal-accordion

- [#1048](https://github.com/baloise/design-system/pull/1048) [`bb3cde835`](https://github.com/baloise/design-system/commit/bb3cde835680edad13c2e9520408b33fd5d33cc6) Thanks [@hirsch88](https://github.com/hirsch88)! - fix tab link on mobile select

- [#1032](https://github.com/baloise/design-system/pull/1032) [`3b99a82c6`](https://github.com/baloise/design-system/commit/3b99a82c6e5e9ddfc1d89bbd3a4754dfb1cf6a1c) Thanks [@hirsch88](https://github.com/hirsch88)! - to avoid global duplicated identifiers the global script gets loaded by the bal-app component

- Updated dependencies [[`89f87f6b2`](https://github.com/baloise/design-system/commit/89f87f6b2e2030558b284d94ced1f1d4d602becc)]:
  - @baloise/design-system-icons@12.3.0
  - @baloise/design-system-css@12.3.0
  - @baloise/design-system-fonts@12.3.0
  - @baloise/design-system-tokens@12.3.0

## 12.2.0

### Minor Changes

- [#1031](https://github.com/baloise/design-system/pull/1031) [`cc51ab42e`](https://github.com/baloise/design-system/commit/cc51ab42ef8601929612ca9fd6af5b096b27c500) Thanks [@hirsch88](https://github.com/hirsch88)! - use static file server as default for the custom font faces

### Patch Changes

- [#1001](https://github.com/baloise/design-system/pull/1001) [`4d5021d82`](https://github.com/baloise/design-system/commit/4d5021d82549ee336b964e05720fd08fefc55c8f) Thanks [@hirsch88](https://github.com/hirsch88)! - bal-spinner only load animated svg ones

- [#1023](https://github.com/baloise/design-system/pull/1023) [`c403bbb36`](https://github.com/baloise/design-system/commit/c403bbb36f77a2a42722e7ba650568b87539e1f2) Thanks [@mladenplaninicic](https://github.com/mladenplaninicic)! - radio and checkbox label change link color when disabled

- Updated dependencies [[`424f8dbb7`](https://github.com/baloise/design-system/commit/424f8dbb73be578684e085d35bec4c7774bb8dba), [`cc51ab42e`](https://github.com/baloise/design-system/commit/cc51ab42ef8601929612ca9fd6af5b096b27c500)]:
  - @baloise/design-system-icons@12.2.0
  - @baloise/design-system-fonts@12.2.0
  - @baloise/design-system-css@12.2.0
  - @baloise/design-system-tokens@12.2.0

## Previous Versions

- [Older versions](https://github.com/baloise/design-system/blob/main/CHANGELOG_v12.md)
- [Rebranding versions](https://github.com/baloise/design-system/blob/main/CHANGELOG_NEXT.md)
