<div align="center">
  
  <img src="./packages/assets/logo.png" width="104" alt="logo">
  <br/>
  <br/>

[![npm version](https://badge.fury.io/js/storybook-addon-designs.svg)](https://badge.fury.io/js/storybook-addon-designs)
[![Monthly download](https://img.shields.io/npm/dm/storybook-addon-designs.svg)](https://www.npmjs.com/package/storybook-addon-designs)
[![GitHub license](https://img.shields.io/github/license/pocka/storybook-addon-designs.svg)](https://github.com/pocka/storybook-addon-designs/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

</div>

<hr/>

## storybook-addon-designs

A [Storybook](https://github.com/storybooks/storybook) addon that embed Figma or websites in the addon panel for better design-development workflow.

- [Docs & Demo](https://pocka.github.io/storybook-addon-designs)

## Requirements

- Storybook@>=6.0.0

This addon should work well with any framework: If you find the case the addon not works, please open an issue.

## Getting started

### 1. Install

```sh
npm install --save-dev storybook-addon-designs
# yarn add -D storybook-addon-designs
```

### 2. Register the addon in `main.js`

```js
module.exports = {
  addons: ['storybook-addon-designs'],
}
```

### 3. Add it to story!

```js
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign],
}

export const myStory = () => <Button>Hello, World!</Button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}
```

## Similar projects

- Adobe XD: [storybook-addon-xd-designs](https://github.com/morgs32/storybook-addon-xd-designs)
- Zeplin: [storybook-zeplin](https://github.com/mertkahyaoglu/storybook-zeplin)
- Abstract: [storybook-addons-abstract](https://github.com/amccloud/storybook-addons-abstract)
