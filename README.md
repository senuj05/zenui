# ZenUI

A modern open-source React UI component library.

## Installation

```sh
npm install @senuj05/zenui
```

## Components

- Avatar
- Badge
- Banner
- Button
- Card
- Checkbox
- Dropdown
- Input
- Menu
- Toggle

## Usage

Import the stylesheet once (for example in your app's entry file), then use the components:

```tsx
import '@senuj05/zenui/styles'
import { Button, Card, Toggle } from '@senuj05/zenui'

export default function App() {
  return (
    <>
      <Card title="Welcome" content="Built with ZenUI." />
      <Button variant="default">Click me</Button>
      <Toggle />
    </>
  )
}
```

## Requirements

- React 18+

## License

MIT
