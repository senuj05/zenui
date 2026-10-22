# Getting started

## Requirements

- React 18 or newer (`react` and `react-dom` are peer dependencies, so ZenUI uses your app's copy)

## Install

```sh
npm install @senuj05/zenui
# or
pnpm add @senuj05/zenui
# or
yarn add @senuj05/zenui
```

## Import the styles

ZenUI ships its CSS as a separate file. Import it **once**, at your app's entry point, before your own styles so you can override it:

```tsx
// main.tsx / index.tsx / app/layout.tsx
import '@senuj05/zenui/styles'
import './my-app.css'
```

Without this import, components render unstyled.

## Use a component

```tsx
import { Button, Input, Banner } from '@senuj05/zenui'

export function SignupForm() {
  return (
    <form>
      <Banner variant="info">Accounts are free during the beta.</Banner>
      <Input label="Email" type="email" hint="We never share it." />
      <Button type="submit">Create account</Button>
    </form>
  )
}
```

All components are named exports from the package root. See the [component reference](./components.md) for every prop.

## TypeScript

Type definitions are included. Prop interfaces are not exported by name yet; to get a component's props type, use `React.ComponentProps`:

```tsx
import type { ComponentProps } from 'react'
import { Button } from '@senuj05/zenui'

type ButtonProps = ComponentProps<typeof Button>
```

## Framework notes

- **Next.js (App Router):** `Dropdown` uses React state, so render it from a Client Component (a file with `'use client'`). Import the stylesheet in `app/layout.tsx`.
- **CommonJS and ESM** builds are both published; your bundler picks the right one automatically.

## Next steps

- [Component reference](./components.md)
- [Theming with design tokens](./theming.md)
