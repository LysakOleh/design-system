import type { JSX } from '@baloise/design-system-components'
import type { Meta } from '@storybook/html'
import { withRender, withComponentControls, StoryFactory } from '../../utils'

type Args = JSX.BalNavigation

const meta: Meta<Args> = {
  title: 'Components/Deprecated/Navigation',
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {
    ...withComponentControls({ tag: 'bal-navigation' }),
  },
  ...withRender(
    ({ ...args }) => `
  <bal-navigation aria-label-main="aria label main" aria-label-meta="aria label meta" meta-value="meta-1" meta-value="meta-1">
        <bal-navigation-levels> <!-- hidden in the dom but can be grabbed by the mutation observer -->
            <bal-navigation-level-meta value="meta-1" label="Privatkunden" link="/?path=/story/components-navigation--basic" linkLabel="Zur Privatkundenübersicht">
                <bal-navigation-level-main value="meta-1-main-1" label="Versichern" link="http://" linkLabel="Alle Versicherungslösungen">
                    <bal-navigation-level-block label="Wohnen & Recht" link="http://">
                        <bal-navigation-level-block-item label="Haushaltsversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Haftpflicht" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Einzel Gegenstände vom Handy bis zum e-Bike" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Cyber-Versicherung (Kreditkartenmissbrauch, Cyber-Mobbing, Schadsoftware)" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Rechtsschutz" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                    <bal-navigation-level-block label="Wohneigentum" link="http://">
                        <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                    <bal-navigation-level-block label="Fahrzeuge & Reisen" link="http://">
                        <bal-navigation-level-block-item label="Auto" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Motorrad" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Velo" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Boot" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Fahrzeug Innenraum (auch Wohnwagen)" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Reiseversicherung" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                    <bal-navigation-level-block label="Personen (Unfall, Krankheit, Tod)" link="http://">
                        <bal-navigation-level-block-item label="Unfallversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Todesfallrisikoversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Krankentaggeldversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Lebensversicherung & Life Coach" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Erwerbsunfähigkeits-versicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Unfallversicherung für Hausangestellte" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                    <bal-navigation-level-block color="grey" label="Services">
                        <bal-navigation-level-block-item label="Gebäudeversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Erdbebenversicherung" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Bauversicherung" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-1-main-2" label="Sparen, Zahlen & Finanzieren" link="http://" linkLabel="Go to Main 1">
                    <bal-navigation-level-block label="Meta 1 Main 2 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-1-main-3" label="Anlegen & Vorsorgen" link="http://" linkLabel="Go to Main 1">
                    <bal-navigation-level-block label="Meta 1 Main 3 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-1-main-4" label="Kontakt & Services" link="http://" linkLabel="Go to Main 1">
                    <bal-navigation-level-block label="Meta 1 Main 4 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-1-main-5" label="Magazin" link="#" isTabLink>
                </bal-navigation-level-main>
            </bal-navigation-level-meta>
            <bal-navigation-level-meta value="meta-2" label="Unternehmen" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
                <bal-navigation-level-main value="meta-2-main-1" label="Meta 2 Main 1" link="http://" linkLabel="Go to Main 1">
                    <bal-navigation-level-block label="Meta 2 Main 1 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-2-main-2" label="Meta 2 Main 2" link="http://" linkLabel="Go to Main 2">
                    <bal-navigation-level-block label="Meta 2 Main 2 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
            </bal-navigation-level-meta>
            <bal-navigation-level-meta value="meta-3" label="Institutionelle Anleger" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
                <bal-navigation-level-main value="meta-3-main-1" label="Meta 3 Main 1" link="http://" linkLabel="Go to Main 1">
                    <bal-navigation-level-block label="Meta 3 Main 1 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-3-main-2" label="Meta 3 Main 2" link="http://" linkLabel="Go to Main 2">
                    <bal-navigation-level-block label="Meta 3 Main 2 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-3-main-3" label="Meta 3 Main 3" link="http://" linkLabel="Go to Main 3">
                    <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-3-main-4" label="Meta 3 Main 4" link="http://" linkLabel="Go to Main 3">
                    <bal-navigation-level-block label="Meta 3 Main 3 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
            </bal-navigation-level-meta>
            <bal-navigation-level-meta value="meta-4" label="Über uns" link="/?path=/story/components-navigation--basic" linkLabel="Go to Meta 2 Overview">
                <bal-navigation-level-main value="meta-4-main-1" label="Meta 4 Main 1" link="http://" linkLabel="Go to Main 1">
                    <bal-navigation-level-block label="Meta 4 Main 1 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-4-main-2" label="Meta 4 Main 2" link="http://" linkLabel="Go to Main 2">
                    <bal-navigation-level-block label="Meta 4 Main 2 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
                <bal-navigation-level-main value="meta-4-main-3" label="Meta 4 Main 3" link="http://" linkLabel="Go to Main 3">
                    <bal-navigation-level-block label="Meta 4 Main 3 Block 1" link="http://">
                        <bal-navigation-level-block-item label="Item 1" link="http://"></bal-navigation-level-block-item>
                        <bal-navigation-level-block-item label="Item 2" link="http://"></bal-navigation-level-block-item>
                    </bal-navigation-level-block>
                </bal-navigation-level-main>
            </bal-navigation-level-meta>
        </bal-navigation-levels>
        <bal-button-group slot="meta-actions">
            <bal-navigation-popover backdrop icon="call" size="small" inactive-color="light" active-color="primary" inverted square arrow content-radius="large" position="bottom" content-width=440 content-min-width=440 offsetY=13 heading="24h Kundenservice">
                <bal-button expanded href="tel://00800 24 800 800" icon="call">00800 24 800 800</bal-button>
                <div>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </div>
            </bal-navigation-popover>
            <bal-navigation-popover backdrop icon="web" size="small" inactive-color="light" active-color="primary" inverted square arrow content-radius="large" position="bottom" content-width=440 content-min-width=440 offsetY=13 heading="Sprache wählen">
                <ul class="is-flex is-flex-direction-column" style="gap: 1rem">
                    <li class="p-normal" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">English
                    </li>
                    <li class="p-normal" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">German
                    </li>
                    <li class="p-normal" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">French
                    </li>
                </ul>
            </bal-navigation-popover>
            <bal-button square size="small" color="light" inverted icon="location"></bal-button>
            <bal-button square size="small" color="light" inverted icon="search"></bal-button>
            <bal-navigation-popover backdrop icon="account" size="small" inactive-color="light" active-color="primary" inverted arrow content-radius="large" position="bottom" content-width=440 content-min-width=440 offsetY=13 heading="Baloise Login" label="login">
                <ul class="is-flex is-flex-direction-column" style="gap: 1rem">
                    <li class="p-normal" style="background-color:lightgrey;padding:.75rem;color:#000D6E;text-align:center;border-radius:4px">Login
                    </li>
                </ul>
            </bal-navigation-popover>
        </bal-button-group>
        <div slot="meta-actions-mobile">
            <bal-navigation-popover backdrop position="bottom" square icon="search" bal-popover-trigger content-radius="none" content-no-shadow content-expanded active-color="primary" inactive-color="light" heading="Suche" offsetY=8 mobile-top>
                <div>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </div>
            </bal-navigation-popover>
            <bal-button square color="light" icon="account"></bal-button>
        </div>
        <div slot="meta-mobile-foot">
            <bal-navigation-popover backdrop position="top" square icon="call" bal-popover-trigger content-radius="large-bottom-none" content-no-shadow content-expanded active-color="primary" inactive-color="white" offsetY=7 heading="24h Kundenservice">
                <bal-button expanded href="tel://00800 24 800 800" icon="call">00800 24 800 800</bal-button>
            </bal-navigation-popover>
            <bal-button square inverted icon="web"></bal-button>
            <bal-button square inverted icon="location"></bal-button>
        </div>
    </bal-navigation>
    <bal-stage color="purple" shape size="small" containerSize="wide">
        <bal-stage-body>
            <bal-stage-back-link href="#" class="mb-medium">Back</bal-stage-back-link>
            <bal-heading class="mb-x-small" space="none">Small title</bal-heading>
        </bal-stage-body>
    </bal-stage>
    <div class="container">
        <h2 class="title is-size-xx-large mb-normal mt-large">Heading</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
            feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
            ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
            blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
            ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue
            velit cursus nunc,
        </p>
        <bal-card class="mt-xxxx-large" color="green">
            <bal-card-content>
                <h2 class="title is-size-xx-large mb-normal">Heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                    sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                    nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                    aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                    dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                    vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                    ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                    rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                    sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
                    ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
                    eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                    consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </p>
            </bal-card-content>
        </bal-card>
    </div>
  `,
  ),
}

export default meta

/**
 * STORIES
 * ------------------------------------------------------
 */

const Story = StoryFactory<Args>(meta)

export const Basic = Story()
