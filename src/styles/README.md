# Shareable Styles System

This directory contains a modular, shareable CSS system designed to eliminate code duplication and provide consistent styling across your Astro pages.

## File Structure

```
src/styles/
├── variables.css      # Design tokens and CSS custom properties
├── layout.css         # Base layout styles and iframe components
├── components.css     # Reusable component styles
├── global.css         # Main entry point that imports all styles
├── fonts.css          # Font imports and declarations
├── reset.css          # CSS reset/normalize
└── tokens.css         # Legacy design tokens (for Minimoog app)
```

## How to Use

### 1. Import Styles in Your Pages

Instead of writing inline styles, import the global styles:

```astro
---
// Your page frontmatter
---

<html>
  <head>
    <link rel="stylesheet" href="/src/styles/global.css" />
  </head>
  <body>
    <!-- Your content -->
  </body>
</html>
```

### 2. Use the Layout Component

For pages with common structure (header, footer, navigation), use the Layout component:

```astro
---
import Layout from '../components/Layout.astro';
---

<Layout
  title="Page Title"
  description="Page description"
>
  <!-- Your page content -->
</Layout>
```

### 3. Use CSS Variables

All design tokens are available as CSS custom properties:

```css
.my-component {
  color: var(--color-text-primary);
  background: var(--color-surface);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  transition: transform var(--transition-slow);
}
```

## Available CSS Variables

### Colors

- `--color-primary`: #ffd700 (gold)
- `--color-primary-light`: #ffed4e
- `--color-primary-dark`: #e6c200
- `--color-text-primary`: #333
- `--color-text-secondary`: #666
- `--color-text-white`: white
- `--color-surface`: rgba(255, 255, 255, 0.95)
- `--color-surface-transparent`: rgba(255, 255, 255, 0.1)

### Typography

- `--font-family-primary`: Inter font stack
- `--font-size-xs` through `--font-size-5xl`
- `--font-weight-normal` through `--font-weight-extrabold`
- `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

### Spacing

- `--spacing-1` through `--spacing-20`

### Border Radius

- `--radius-sm` through `--radius-full`

### Shadows

- `--shadow-sm` through `--shadow-2xl`

### Transitions

- `--transition-fast`: 0.1s ease-out
- `--transition-normal`: 0.2s ease-in-out
- `--transition-slow`: 0.3s ease-in-out

## Benefits

1. **DRY Principle**: No more duplicated styles across pages
2. **Consistency**: All pages use the same design tokens
3. **Maintainability**: Change colors, spacing, etc. in one place
4. **Reusability**: Components can be easily shared between pages
5. **Performance**: Styles are cached and shared across pages

## Migration Guide

To migrate existing pages:

1. Remove inline `<style>` blocks
2. Import global styles: `<link rel="stylesheet" href="/src/styles/global.css" />`
3. Replace hardcoded values with CSS variables
4. Use the Layout component for common page structure
5. Extract unique styles to `components.css` if they're reusable

## Adding New Styles

When adding new styles:

1. **Use existing variables** when possible
2. **Add new variables** to `variables.css` if needed
3. **Add component styles** to `components.css`
4. **Add layout styles** to `layout.css`
5. **Update this README** with new variables or patterns
