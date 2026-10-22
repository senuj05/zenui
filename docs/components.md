# Component reference

Every component is imported from the package root:

```tsx
import { Avatar, Badge, Banner, Button, Card, Checkbox, Dropdown, Input, Menu, Toggle } from '@senuj05/zenui'
```

Unless a section says otherwise, extra props (`className`, `id`, `onClick`, `aria-*`, …) are passed through to the component's root HTML element.

- [Avatar](#avatar)
- [Badge](#badge)
- [Banner](#banner)
- [Button](#button)
- [Card](#card)
- [Checkbox](#checkbox)
- [Dropdown](#dropdown)
- [Input](#input)
- [Menu](#menu)
- [Toggle](#toggle)

---

## Avatar

A round user image. Shows a generic user icon when no `src` is given.

```tsx
<Avatar src="/people/ada.jpg" alt="Ada Lovelace" size="large" />
<Avatar />  {/* fallback icon */}
```

| Prop   | Type                               | Default    | Description                       |
| ------ | ---------------------------------- | ---------- | --------------------------------- |
| `src`  | `string`                           | —          | Image URL. Omit to show the fallback icon. |
| `alt`  | `string`                           | —          | Alt text for the image. Always provide one when `src` is set. |
| `size` | `'small' \| 'medium' \| 'large'`   | `'medium'` | Avatar size.                      |

> **Note:** Other props are currently not forwarded to the element.

---

## Badge

A small inline label for status or counts. Renders a `<span>`.

```tsx
<Badge>New</Badge>
<Badge variant="success">Paid</Badge>
<Badge variant="error">Failed</Badge>
```

| Prop       | Type                                                                          | Default     | Description    |
| ---------- | ----------------------------------------------------------------------------- | ----------- | -------------- |
| `variant`  | `'default' \| 'secondary' \| 'success' \| 'warning' \| 'outline' \| 'error'` | `'default'` | Visual style.  |
| `children` | `ReactNode`                                                                   | required    | Badge content. |

---

## Banner

A full-width message box for page- or section-level feedback. Renders a `<div>`.

```tsx
<Banner variant="success">Your changes were saved.</Banner>
<Banner variant="error" role="alert">Payment failed. Please try again.</Banner>
```

| Prop       | Type                                           | Default  | Description     |
| ---------- | ---------------------------------------------- | -------- | --------------- |
| `variant`  | `'info' \| 'success' \| 'warning' \| 'error'`  | `'info'` | Message type.   |
| `children` | `ReactNode`                                    | required | Banner content. |

> **Accessibility tip:** for messages that appear in response to an action, add `role="status"` (or `role="alert"` for errors) so screen readers announce them.

---

## Button

Renders a native `<button>`. Accepts all standard button attributes (`onClick`, `disabled`, `type`, `form`, …).

```tsx
<Button onClick={save}>Save</Button>
<Button variant="outline" size="small">Cancel</Button>
<Button variant="destructive">Delete project</Button>
<Button type="submit">Submit</Button>
```

| Prop       | Type                                | Default     | Description |
| ---------- | ----------------------------------- | ----------- | ----------- |
| `variant`  | see below                           | `'default'` | Visual style. |
| `size`     | `'small' \| 'medium' \| 'large'`    | `'medium'`  | Button size. |
| `type`     | `'button' \| 'submit' \| 'reset'`   | `'button'`  | Defaults to `'button'` (not the browser's `'submit'`) so buttons inside forms don't submit by accident. Set `type="submit"` explicitly. |
| `children` | `ReactNode`                         | required    | Button label. |

**Variants**

| Variant              | Use for                                              |
| -------------------- | ---------------------------------------------------- |
| `default`            | The primary action on a page.                        |
| `secondary`          | Secondary actions.                                   |
| `outline`            | Lower-emphasis actions.                              |
| `ghost`              | Minimal actions, e.g. in toolbars.                   |
| `destructive`        | Irreversible or dangerous actions.                   |
| `destructive-ghost`  | Lower-emphasis dangerous actions.                    |
| `inverse`            | Primary action on a dark (brand-coloured) background.|
| `outline-inverse`    | `outline` on a dark background.                      |
| `ghost-inverse`      | `ghost` on a dark background.                        |

---

## Card

A content container with optional subtitle, title, text, image and list.

```tsx
<Card subtitle="Guide" title="Getting started" content="Install ZenUI and build your first screen." />

<Card variant="media-card" title="Lake Bled" image="/img/bled.jpg" />

<Card
  variant="card-list"
  title="Team"
  items={[
    { image: '/people/ada.jpg', label: 'Ada' },
    { image: '/people/alan.jpg', label: 'Alan' },
  ]}
/>
```

| Prop       | Type                                                           | Default | Description |
| ---------- | -------------------------------------------------------------- | ------- | ----------- |
| `variant`  | `'default' \| 'media-card' \| 'card-buttons' \| 'card-list'`   | —       | Layout style. |
| `subtitle` | `string`                                                       | —       | Small text above the title. |
| `title`    | `string`                                                       | —       | Card heading (rendered as `<h3>`). |
| `content`  | `string`                                                       | —       | Body text. |
| `image`    | `string`                                                       | —       | Image URL shown in the card. |
| `items`    | `Array<{ image: string; label: string }>`                      | —       | List of image + label rows. |

> **Notes:**
> - Content props are strings; to put arbitrary JSX in a card, wrap your own markup instead.
> - `variant="card-buttons"` renders a fixed "Submit" button with no click handler, so it is mainly for display/prototyping right now.
> - Other props are currently not forwarded to the element.
> - Size and shadow can be customised with CSS variables; see [Theming](./theming.md#card-variables).

---

## Checkbox

A styled native checkbox with a label. Accepts all standard `<input>` attributes (`checked`, `defaultChecked`, `onChange`, `name`, `disabled`, …).

```tsx
<Checkbox defaultChecked>Remember me</Checkbox>

const [agreed, setAgreed] = useState(false)
<Checkbox variant="round" checked={agreed} onChange={(e) => setAgreed(e.target.checked)}>
  I agree to the terms
</Checkbox>
```

| Prop       | Type                     | Default     | Description |
| ---------- | ------------------------ | ----------- | ----------- |
| `variant`  | `'default' \| 'round'`   | `'default'` | Square or round checkmark. |
| `children` | `ReactNode`              | required    | Label text. Clicking it toggles the checkbox. |

Extra props go to the inner `<input>`, not the wrapping `<label>`.

---

## Dropdown

An accordion: a list of sections where one section is open at a time. Clicking an open section closes it. The first section starts open.

```tsx
<Dropdown
  items={[
    { label: 'What is ZenUI?', content: 'A React component library.' },
    { label: 'Is it free?', content: 'Yes, MIT licensed.' },
  ]}
/>
```

| Prop    | Type                                          | Default  | Description |
| ------- | --------------------------------------------- | -------- | ----------- |
| `items` | `Array<{ label: string; content: string }>`   | required | Sections to display. |

> **Note:** Uses React state. In Next.js App Router, render it from a Client Component.

---

## Input

A text input with a built-in label, optional hint and error message. Accepts all standard `<input>` attributes (`type`, `value`, `onChange`, `placeholder`, `required`, …).

```tsx
<Input label="Full name" />
<Input label="Email" type="email" hint="We'll send a confirmation link." />
<Input label="Password" type="password" error="Must be at least 8 characters." />
<Input label="Search" size="sm" />
```

| Prop    | Type                       | Default  | Description |
| ------- | -------------------------- | -------- | ----------- |
| `label` | `string`                   | required | Visible label. Placeholders are not a substitute. |
| `hint`  | `string`                   | —        | Helper text under the input. |
| `error` | `string`                   | —        | Error message. Replaces the hint and sets `aria-invalid`. |
| `size`  | `'sm' \| 'md' \| 'lg'`     | `'md'`   | Visual size. (Replaces the native `size` attribute.) |
| `id`    | `string`                   | auto     | Generated automatically if omitted. |

The label and the hint/error message are wired to the input with `htmlFor` and `aria-describedby`, so screen readers read them out.

---

## Menu

A vertical list of selectable text items.

```tsx
<Menu
  items={['Profile', 'Settings', 'Sign out']}
  onSelect={(item) => console.log('Selected', item)}
/>
```

| Prop       | Type                       | Default  | Description |
| ---------- | -------------------------- | -------- | ----------- |
| `items`    | `string[]`                 | required | Menu entries. Must be unique (they are used as React keys). |
| `onSelect` | `(item: string) => void`   | required | Called with the clicked item. |

> **Note:** Items currently respond to mouse clicks only, not keyboard. For keyboard-critical navigation, use a list of `Button` (`variant="ghost"`) components instead.

---

## Toggle

An on/off switch built on a native checkbox. Accepts all standard `<input>` attributes.

```tsx
const [enabled, setEnabled] = useState(false)

<Toggle
  aria-label="Email notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

| Prop      | Type          | Default     | Description |
| --------- | ------------- | ----------- | ----------- |
| `variant` | `'default'`   | `'default'` | Visual style. |

> **Accessibility tip:** the toggle has no visible label, so always pass `aria-label` (or label it with `aria-labelledby`).
