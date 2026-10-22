# Theming

ZenUI's colours, font and corner radius come from CSS custom properties (design tokens) defined on `:root`. Override them in your own CSS, loaded **after** `@senuj05/zenui/styles`, to restyle every component at once.

For example, the default `Button` gets its background from `--zen-color-brand` (`#160505`) and its hover colour from `--zen-color-brand-hover` (`#2d0a0a`). To change them, set your own values:

```css
/* my-theme.css: these are ZenUI's button colours; replace them with your brand's */
:root {
  --zen-color-brand: #160505;
  --zen-color-brand-hover: #2d0a0a;
  --zen-font-family: "Inter", sans-serif;
  --zen-radius: 8px;
}
```

```tsx
import '@senuj05/zenui/styles'
import './my-theme.css'
```

## Tokens

| Token                             | Default        | Used for |
| --------------------------------- | -------------- | -------- |
| `--zen-color-brand`               | `#160505`      | Primary buttons, accents, dark surfaces |
| `--zen-color-brand-hover`         | `#2d0a0a`      | Hover state of brand-coloured elements |
| `--zen-color-text`                | `#160505`      | Body text |
| `--zen-color-text-muted`          | `#606060`      | Secondary text (hints, subtitles) |
| `--zen-color-text-inverse`        | `#ffffff`      | Text on brand/dark backgrounds |
| `--zen-color-text-inverse-muted`  | `#b3b3b3`      | Secondary text on dark backgrounds |
| `--zen-color-surface`             | `#ffffff`      | Component backgrounds |
| `--zen-color-surface-subtle`      | `#f4f3f3`      | Secondary/subtle backgrounds |
| `--zen-color-surface-hover`       | `#e9e8e8`      | Hover backgrounds |
| `--zen-color-border`              | `#e1e1e1`      | Decorative borders |
| `--zen-color-border-strong`       | `#8d8d8d`      | Form field borders |
| `--zen-color-danger`              | `#d92d30`      | Destructive buttons, errors |
| `--zen-color-danger-hover`        | `#b82326`      | Hover state of destructive elements |
| `--zen-color-success`             | `#8bbb80`      | Success states |
| `--zen-color-warning`             | `#eb910b`      | Warning states |
| `--zen-font-family`               | system UI stack| All component text |
| `--zen-radius`                    | `5px`          | Corner radius |

### Keep contrast accessible

The defaults are chosen to meet WCAG AA contrast (for example `--zen-color-danger` gives 4.8:1 with white text). When you change a colour, check it against the colour it sits on:

- `--zen-color-brand` and `--zen-color-danger` vs. `--zen-color-text-inverse`
- `--zen-color-text` and `--zen-color-text-muted` vs. `--zen-color-surface`
- `--zen-color-border-strong` vs. `--zen-color-surface` (needs at least 3:1 for form fields)

Hover colours should be **darker** than their base so contrast improves, not worsens, on hover.

## Scoped themes

Tokens are ordinary CSS variables, so you can override them for one part of the page only:

```css
.admin-area {
  --zen-color-brand: #d92d30;        /* the destructive button red */
  --zen-color-brand-hover: #b82326;
}
```

```tsx
<section className="admin-area">
  <Button>Uses the admin brand colour</Button>
</section>
```

The same approach works for a dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Same colours the inverse button uses on dark backgrounds */
    --zen-color-brand: #ffffff;
    --zen-color-brand-hover: #f4f3f3;
    --zen-color-text-inverse: #160505;
    --zen-color-text: #f4f3f3;
    --zen-color-surface: #1a1a1a;
    --zen-color-surface-subtle: #242424;
    --zen-color-surface-hover: #2e2e2e;
    --zen-color-border: #333333;
  }
}
```

## Card variables

`Card` has its own variables for layout:

| Variable                       | Default                         |
| ------------------------------ | ------------------------------- |
| `--zen-card-bg`                | `#fff`                          |
| `--zen-card-border-radius`     | `5px`                           |
| `--zen-card-box-shadow`        | `0 2px 4px rgba(0, 0, 0, 0.1)`  |
| `--zen-card-hover-box-shadow`  | `0 4px 8px rgba(0, 0, 0, 0.15)` |
| `--zen-card-padding`           | `16px`                          |
| `--zen-card-width`             | `340px`                         |
| `--zen-card-height`            | `200px`                         |

```css
.product-grid {
  --zen-card-width: 100%;
  --zen-card-height: auto;
}
```
