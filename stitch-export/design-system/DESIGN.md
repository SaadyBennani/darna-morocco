---
name: Neo-Mosaic Minimalist
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444653'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3557bc'
  primary: '#002068'
  on-primary: '#ffffff'
  primary-container: '#003399'
  on-primary-container: '#8aa4ff'
  inverse-primary: '#b5c4ff'
  secondary: '#9d4131'
  on-secondary: '#ffffff'
  secondary-container: '#fd8b76'
  on-secondary-container: '#742316'
  tertiary: '#362400'
  on-tertiary: '#ffffff'
  tertiary-container: '#523800'
  on-tertiary-container: '#d69e2b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#153ea3'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a6'
  on-secondary-fixed: '#3f0300'
  on-secondary-fixed-variant: '#7e2a1c'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#f9bc48'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

This design system blends the rhythmic complexity of traditional Moroccan zellige with high-end modern minimalism. The brand personality is culturally rooted yet technologically advanced, evoking a sense of discovery, precision, and heritage. It targets a sophisticated audience that appreciates artisanal detail within a clean, functional digital interface.

The visual style is **Modern / Geometric**, utilizing heavy white space to balance intricate mosaic patterns. Decorative motifs derived from the reference image—star polygons and interlocking tessellations—are used sparingly as high-impact accents (background textures, hero containers, or loading states) to ensure the UI remains focused and readable.

## Colors

The palette is derived directly from the vibrant ceramic glazes of the reference mosaic.

- **Primary (Cobalt):** Used for primary actions, navigation headers, and active states. It provides a deep, authoritative anchor.
- **Secondary (Terracotta):** Used for meaningful accents, notifications, or call-to-action highlights to provide warmth.
- **Tertiary (Ochre):** Reserved for secondary visual interest, warnings, or sophisticated highlights.
- **Azure:** A soft blue used for subtle backgrounds, secondary buttons, or chip elements to prevent the UI from feeling too heavy.
- **Base:** The interface relies on a crisp white (#FFFFFF) background to maintain a minimalist aesthetic and allow the mosaic patterns to pop.

## Typography

The design system maintains **Plus Jakarta Sans** to provide a clean, modern contrast to the complex geometric patterns.

- **Headlines:** Use bold weights with tight letter spacing for a contemporary, editorial feel.
- **Body Text:** Standardized on 16px for optimal readability with generous line height (1.5x) to support the minimalist "breathing room."
- **Labels:** Use semi-bold weights and slightly increased letter spacing for clarity in navigation and form elements.

## Layout & Spacing

The design system utilizes a **Fluid Grid** with fixed maximum widths for desktop to ensure the intricate patterns don't become overwhelming on ultra-wide screens.

- **Grid:** A 12-column system on desktop, 4-column on mobile.
- **Rhythm:** An 8px base unit drives all padding and margin decisions.
- **White Space:** Intentional "dead zones" are encouraged between sections to balance the visual density of mosaic-styled components.
- **Reflow:** On mobile, margins tighten to 16px, and complex background patterns should be simplified or transitioned into linear borders to maintain legibility.

## Elevation & Depth

To maintain the balance between "artisanal" and "modern," hierarchy is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surfaces:** Use flat, solid fills. Depth is achieved by placing Cobalt or Terracotta containers on light Azure or White backgrounds.
- **Borders:** Subtle 1px borders in Azure or light neutral are used to define cards and inputs.
- **Patterns as Depth:** Background patterns use low-opacity (5-10%) variants of the primary colors to create a "watermarked" depth effect without adding physical weight.

## Shapes

The shape language reflects the sharp, mathematical precision of the mosaic stars.

- **Corners:** While the design system uses a "Soft" (0.25rem) base roundedness for buttons and inputs to maintain approachability, larger containers should use **Sharp** (0px) corners when they contain geometric pattern fills.
- **Masks:** Geometric star shapes from the reference image can be used as image masks for avatars or featured category icons.

## Components

- **Buttons:** Primary buttons are solid Cobalt with white text, using "Soft" corners. Secondary buttons use Terracotta outlines.
- **Cards:** White backgrounds with a 1px Azure border. For "featured" cards, a thin 4px mosaic pattern strip can be applied to the top edge.
- **Chips:** Small, pill-shaped elements using Azure backgrounds with deep Cobalt text for high legibility.
- **Input Fields:** Minimalist design with a 1px bottom border that transforms into a Cobalt 2px border on focus.
- **Dividers:** Instead of simple lines, use a very thin (8px height) repeating geometric "frieze" pattern at 10% opacity to separate major page sections.
- **Icons:** Monolinear, geometric icons that mirror the stroke weights of the Plus Jakarta Sans typeface.
