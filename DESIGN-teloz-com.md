# Design System Inspired by Teloz

> Auto-extracted from `https://www.teloz.com/` on 2026-07-27

## 1. Visual Theme & Atmosphere

Energetic and playful with bold colors and confident hierarchy.

The hero section leads with "The contact center, rebuilt for the AI era.".

**Key Characteristics:**
- Geist as the heading font (custom web font loaded via @font-face)
- Geist as the body font for all running text
- Heading weight 500, letter-spacing -1.2px
- Light/white background (#fffbf7) as the primary canvas
- Primary accent `#fd7a03` used for CTAs and brand highlights
- 8 shadow level(s) detected — tinted shadows
- Rounded corners (16px+) creating a friendly, approachable feel
- Tags: light, rounded, colorful, monospace, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#fd7a03`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#0684bc`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#fffbf7`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#111111`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#1e293b`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#6c757d`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#111111`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#ffffff` | `--palette-1` | button | large | text-dark |
| 2 | `#111111` | `--palette-2` | block | large | text-light |
| 3 | `#fd7a03` | `--palette-3` | text-accent | medium | text-dark |
| 4 | `#1e293b` | `--palette-4` | text-accent | medium | text-light |
| 5 | `#0684bc` | `--palette-5` | text-accent | medium | text-light |
| 6 | `#10b981` | `--palette-6` | badge | small | text-dark |
| 7 | `#000000` | `--palette-7` | button | small | text-light |
| 8 | `#fff7ed` | `--palette-8` | badge | small | text-dark |
| 9 | `#6c757d` | `--palette-9` | badge | small | text-light |
| 10 | `#fed7aa` | `--palette-10` | badge | small | text-dark |
| 11 | `#8b5cf6` | `--palette-11` | badge | small | text-light |
| 12 | `#1877f2` | `--palette-12` | badge | small | text-light |
| 13 | `#e60023` | `--palette-13` | badge | small | text-light |

## 3. Typography Rules

- **Heading Font:** `Geist` (web font)
- **Body Font:** `Geist` (web font)

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | Geist | 48px | 500 | 60px | -1.2px |
| H2 | Geist | 36px | 500 | 45px | normal |
| H3 | Geist | 20px | 500 | 28px | normal |
| Body | Geist | 20px | 400 | 32.5px | normal |
| Small | Geist | 14px | 500 | 20px | normal |
| Code | Geist Mono | 10px | 400 | 15px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `48px` | headings |
| H1 | `40px` | headings |
| H2 | `36px` | headings |
| H3 | `24px` | headings |
| H4 | `20px` | headings |
| Body L | `18px` | body / supporting text |
| Body | `16px` | body / supporting text |
| Small | `14px` | body / supporting text |
| XS | `13px` | body / supporting text |
| Caption | `12px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: #ffffff;
  color: ;
  border-radius: 33554400px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgb(254, 215, 170);
  cursor: pointer;
}
```

### Filled Button

```css
.btn-filled {
  background: #fd7a03;
  color: #ffffff;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
```

### Filled Button 2

```css
.btn-filled-2 {
  background: transparent;
  color: #1e293b;
  border-radius: 10px;
  padding: 24px 16px;
  font-size: 18px;
  font-weight: 500;
  border: 2px solid oklab(0.581757 -0.0680675 -0.106613 / 0.3);
  cursor: pointer;
}
```

### Pill Button

```css
.btn-pill {
  background: #fd7a03;
  color: #ffffff;
  border-radius: 33554400px;
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
```

### Pill Button 2

```css
.btn-pill-2 {
  background: #fffbf7;
  color: #0684bc;
  border-radius: 33554400px;
  padding: 0px 24px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid oklab(0.581757 -0.0680675 -0.106613 / 0.3);
  cursor: pointer;
}
```

### Filled Button 3

```css
.btn-filled-3 {
  background: #fd7a03;
  color: #ffffff;
  border-radius: 12px;
  padding: 24px 12px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
```

### Card

```css
.card {
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.581757 -0.0680675 -0.106613 / 0.05) 0px 20px 25px -5px, oklab(0.581757 -0.0680675 -0.106613 / 0.05) 0px 8px 10px -6px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `10px` — use multiples (20px, 30px, 40px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `10px` | element |
| spacing-2 | `8px` | element |
| spacing-3 | `2px` | element |
| spacing-4 | `16px` | element |
| spacing-5 | `24px` | card |
| spacing-6 | `32px` | card |
| spacing-7 | `6px` | element |
| spacing-8 | `20px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-card | `16px` | card |
| radius-button | `8px` | button |
| radius-button | `12px` | button |
| radius-button | `10px` | button |
| radius-subtle | `4px` | subtle |
| radius-subtle | `1px` | subtle |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Mid | `rgba(0, 0, 0, 0.08) 0px 2px 12px 0px, rgba(255, 255, 255, 0.9) 0px 1px 0px 0px i...` | Dropdowns, popovers |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |
| Low | `rgba(255, 255, 255, 0.85) 0px 1px 0px 0px inset, rgba(253, 122, 3, 0.1) 0px 0px ...` | Cards, subtle elevation |
| Mid | `rgba(253, 122, 3, 0.4) 0px 2px 6px -1px` | Dropdowns, popovers |
| Low | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation |

> **Note:** This site uses chromatic (color-tinted) shadows rather than pure black — this is a deliberate brand choice that adds warmth to elevation.

## 7. Do's and Don'ts

### Do
- Use `#fffbf7` as the primary background color
- Use `Geist` for all headings and `Geist` for body text
- Use `#fd7a03` as the single dominant accent/CTA color
- Maintain `10px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`16px`+) consistently for all interactive elements
- Embrace bold color combinations — playful energy is the point
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 500 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute Geist/Geist with generic alternatives
- Don't use irregular spacing — stick to 10px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#1e293b` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 10px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #fffbf7
Text:        #1e293b
Accent:      #fd7a03
Secondary:   #0684bc
Border:      #111111
```

### Example Prompts

1. "Build a hero section with a `#fffbf7` background, `Geist` heading in `#1e293b`, and a `#fd7a03` CTA button with 33554400px radius."
2. "Create a pricing card using background `#111111`, border `#111111`, `Geist` for text, and 30px padding."
3. "Design a navigation bar — `#fffbf7` background, `#1e293b` links, `#fd7a03` for active state."
4. "Build a feature grid with 3 columns, 30px gap, each card using the card component style."
5. "Create a footer with `#1e293b` background, `#fffbf7` text, and 20px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 41 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable | Value |
|---|---|
| `--background` | `#fffbf7` |
| `--foreground` | `#1e293b` |
| `--card` | `#fff` |
| `--card-foreground` | `#1e293b` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#1e293b` |
| `--primary` | `#fd7a03` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#fff7ed` |
| `--secondary-foreground` | `#6c757d` |
| `--muted` | `#fef3e7` |
| `--muted-foreground` | `#6c757d` |
| `--accent` | `#0684bc` |
| `--accent-foreground` | `#fff` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#ef4444` |
| `--border` | `#fed7aa` |
| `--input` | `#fef3e7` |
| `--ring` | `#fd7a03` |
| `--chart-1` | `#fd7a03` |
| `--chart-2` | `#0684bc` |
| `--chart-3` | `#fc9507` |
| `--chart-4` | `#6c757d` |
| `--chart-5` | `#0a9ed8` |
| `--sidebar` | `#fff` |
| `--sidebar-foreground` | `#1e293b` |
| `--sidebar-primary` | `#fd7a03` |
| `--sidebar-primary-foreground` | `#fff` |
| `--sidebar-accent` | `#fff7ed` |
| `--sidebar-accent-foreground` | `#6c757d` |
| ... | *(10 more)* |

### Spacing Variables

| Variable | Value |
|---|---|
| `--radius` | `.75rem` |
