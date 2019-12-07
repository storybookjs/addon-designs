<div align="center">
  
  <img src="./packages/assets/logo.png" width="104" alt="logo">
  <br/>

[![npm version](https://badge.fury.io/js/storybook-addon-designs.svg)](https://badge.fury.io/js/storybook-addon-designs)
[![Monthly download](https://img.shields.io/npm/dm/storybook-addon-designs.svg)](https://www.npmjs.com/package/storybook-addon-designs)
[![GitHub license](https://img.shields.io/github/license/pocka/storybook-addon-designs.svg)](https://github.com/pocka/storybook-addon-designs/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

</div>

<hr/>

## storybook-addon-designs

A [Storybook](https://github.com/storybooks/storybook) addon that embed Figma or websites in the addon panel for better design-development workflow.

- [Demo](https://pocka.github.io/storybook-addon-designs)

## Requirements

- Storybook@>=5.0.0

This addon should work well with any framework: If you find the case the addon not works, please open an issue.

## Getting started

### 1. Install

```sh
npm install --save-dev storybook-addon-designs
# yarn add -D storybook-addon-designs
```

### 2. Register the addon in `addons.js`

```js
// .storybook/addons.js

import 'storybook-addon-designs/register'
```

### 3. Add it to story!

CSF (Component Story Format)

```js
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign]
}

export const myStory = () => <Button>Hello, World!</Button>

myStory.story = {
  name: 'My awesome story',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    }
  }
}
```

`storiesOf` API

```js
import { withDesign } from 'storybook-addon-designs'

storiesOf('My stories', module)
  .addDecorator(withDesign)
  .add('My awesome story', () => <Button>Hello, World!</Button>, {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    }
  })
```

MDX

```jsx
import { Meta, Story } from '@storybook/addon-docs/blocks'

<Meta title="My stories"/>

<Story
  name="My awesome story"
  parameters={{
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
    }
  }}
/>
```

## Usage

Add `withDesign` decorator then put `design` parameter to your story.

> NOTE: If you omit `design` parameter, the addon does nothing.

The type of `design` parameter is differ by embed type.
For more detailed information, see [type definition file](./packages/storybook-addon-designs/src/config.ts).

### Available types

- `iframe` ... Embed `<iframe/>`.
- `figma` ... Embed [Figma Live Embed Kit](https://www.figma.com/developers/embed).
- `pdf` ... Embed PDF document.
- `image` ... Embed image.

### Utility function

If you want type support for type checking or IDE auto completion, use exported [`config` function](./packages/storybook-addon-designs/src/index.ts#L24).

```ts
import { config } from 'storybook-addon-designs'

storiesOf('foo', module).add('bar', () => <Button>Hello, World!</Button>, {
  design: config({
    // IDE would auto complete keys and `type` values!
    type: 'iframe',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'
  })
})
```

### Multiple designs for single story

You can attach more than one designs by passing array of config to `design` parameter.

```js
design: [
  {
    type: 'pdf',
    url: 'https://my-pdf'
  },
  {
    // Specify tab name by passing "name" prop
    name: 'Image Preview',
    type: 'image',
    url: 'https://my-image'
  }
]
```

## Similar projects

- [storybook-addon-figma](https://github.com/hharnisc/storybook-addon-figma)
