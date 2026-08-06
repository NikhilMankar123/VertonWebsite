---
name: Veriton Industrial Core
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#42474e'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#72777f'
  outline-variant: '#c2c7cf'
  surface-tint: '#386188'
  primary: '#002743'
  on-primary: '#ffffff'
  primary-container: '#0a3d62'
  on-primary-container: '#80a8d3'
  inverse-primary: '#a2caf7'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e4e2e2'
  on-secondary-container: '#646464'
  tertiary: '#382000'
  on-tertiary: '#ffffff'
  tertiary-container: '#553300'
  on-tertiary-container: '#e69200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cfe5ff'
  primary-fixed-dim: '#a2caf7'
  on-primary-fixed: '#001d34'
  on-primary-fixed-variant: '#1d496f'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c8c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffddb9'
  tertiary-fixed-dim: '#ffb961'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#663e00'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-glass: rgba(255, 255, 255, 0.7)
  border-industrial: '#D1D5DB'
  data-blue: '#1E3A8A'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  highlight:
    fontFamily: Roboto Flex
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for **Veriton Technical Solutions**, targeting the intersection of high-scale engineering and digital precision. The brand personality is authoritative, reliable, and technologically advanced, echoing the architectural integrity of global industrial leaders like Siemens or ABB.

The visual style is **Corporate Modern with Glassmorphic accents**. It utilizes a "Hardware-Software" aesthetic: structural layouts (representing engineering) paired with ethereal, translucent overlays (representing data and software). The interface must feel weighted and professional, avoiding decorative fluff in favor of functional elegance and high-tech utility.

## Colors

The palette is anchored by **Deep Blue**, evoking stability and corporate trust. **Steel Gray** provides a neutral, industrial foundation for structural elements. **Orange** is used sparingly as a high-visibility accent for calls-to-action and critical status indicators, mimicking industrial safety signage.

**Gradients & Surfaces:**
- **Primary Gradient:** Linear 135deg from `#0A3D62` to `#1E3A8A`.
- **Glass Effect:** Use `surface-glass` with a 12px-20px backdrop-blur for cards and navigation overlays to create depth without clutter.
- **Backgrounds:** Use `#F4F4F4` for main application backgrounds to reduce eye strain and provide a clean canvas for white glassmorphic cards.

## Typography

This design system uses a tripartite typographic hierarchy. **Montserrat** provides a strong, geometric presence for headings, suggesting industrial power. **Open Sans** handles the bulk of information with high legibility and a neutral tone. **Roboto Flex** (utilizing its mechanical character) is reserved for technical highlights, captions, and data points, often appearing in italics to differentiate from standard body text.

Large headlines should use slight negative letter-spacing to appear tighter and more impactful. Labels for technical data or categories should always use the `label-caps` style for a distinct, functional look.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1280px container for desktop viewing to maintain a premium, editorial feel. 

- **Grid:** 12-column system on desktop, 4-column on mobile.
- **Rhythm:** An 8px linear scale governs all padding and margins (`8px`, `16px`, `24px`, `32px`, etc.).
- **Sticky Elements:** The global navigation and sub-contextual headers (like data filters) should remain sticky to the top of the viewport with a glassmorphic background to maintain context during long technical scrolls.

## Elevation & Depth

Hierarchy is achieved through **Glassmorphism and Soft Ambient Shadows**. 

1.  **Level 0 (Base):** Light Gray background (`#F4F4F4`).
2.  **Level 1 (Cards/Containers):** White background or Glassmorphic surface (70% opacity white + 16px blur) with a 1px border (`#FFFFFF` 30%).
3.  **Level 2 (Active/Hover):** Cards gain a soft, diffused shadow: `0 8px 30px rgba(0, 0, 0, 0.05)`.
4.  **Level 3 (Modals/Dropdowns):** Elevated surfaces with a more pronounced shadow: `0 15px 45px rgba(10, 61, 98, 0.12)`.

The use of a subtle Blue-tinted shadow (derived from the primary color) for high-elevation elements reinforces the brand identity within the depth model.

## Shapes

The design system utilizes **Rounded (0.5rem / 8px)** corners as the default. This balances the "hard" industrial nature of the industry with a modern, approachable software feel. 

- **Buttons & Inputs:** 8px radius.
- **Large Cards:** 16px radius (`rounded-lg`).
- **Status Tags/Chips:** Full pill-shaped (`rounded-full`) to distinguish them from interactive buttons.
- **Icon Containers:** Should use a consistent 8px radius or a perfect circle for profile elements.

## Components

### Buttons
- **Primary:** Deep Blue background, white text, 8px radius. Subtle scale-down effect on click.
- **Secondary:** Transparent with a 2px Steel Gray border. 
- **Accent:** Orange background for critical actions (e.g., "Submit Quote", "Emergency Stop").

### Input Fields
- White backgrounds with a 1px Steel Gray border. Focus state uses a 2px Deep Blue border and a very soft blue outer glow. Label font should be `body-sm`.

### Cards (Glassmorphic)
- The flagship component. Use for dashboard widgets and featured technical services. Background: `surface-glass`. Border: 1px solid white (20% opacity). Box-shadow: Level 1.

### Navigation
- Sticky top-bar. Use a high-density glassmorphism effect (85% opacity) to ensure text remains legible as users scroll over varied content.

### Data Tables
- Clean, minimal layout. Rows separated by 1px `#E5E7EB` borders. Header row uses `label-caps` with a light gray background. Use Roboto Medium Italic for numerical units (e.g., *150 kW*).