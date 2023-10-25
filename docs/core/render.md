---
title: 'Render'
description: 'Render JSX email components to HTML email'
slug: render
---

<!--@include: @/include/header.md-->

## Usage

Convert React components into a HTML string.

```jsx
import { render } from 'jsx-email';

import { BatmanTemplate } from './emails/Batman';

const html = render(<BatmanTemplate firstName="Bruce" lastName="Wayne" />);
```

## Method Options

```ts
export interface Options {
  plainText?: boolean;
  pretty?: boolean;
}
```

### Options

```ts
plainText?: boolean;
```

Beautify HTML output

```ts
pretty?: boolean;
```

Generate plain text version
