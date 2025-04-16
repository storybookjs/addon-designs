<div align="center">
  
  <img src="./packages/examples/assets/logo.png" width="104" alt="logo">
  <br/>
  <br/>

[![npm version](https://badge.fury.io/js/@storybook%2Faddon-designs.svg)](https://badge.fury.io/js/@storybook%2Faddon-designs)
[![Monthly download](https://img.shields.io/npm/dm/@storybook/addon-designs.svg)](https://www.npmjs.com/package/@storybook/addon-designs)
[![GitHub license](https://img.shields.io/github/license/storybookjs/addon-designs.svg)](https://github.com/storybookjs/addon-designs/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

</div>

<hr/>

## @storybook/addon-designs

A [Storybook](https://github.com/storybooks/storybook) addon that embed Figma or websites in the addon panel for better design-development workflow.

- [Docs & Demo](https://storybookjs.github.io/addon-designs)

## Requirements

- Storybook@>=9.0.0 (Version 7 of this addon supports Storybook 7, Version 8 supports Storybook 8)

This addon should work well with any framework. If you find that the addon does not work, please open an issue.

## Getting started

### 1. Install

```sh
npm install -D @storybook/addon-designs

yarn add -D @storybook/addon-designs

pnpm add -D @storybook/addon-designs
```

### 2. Register the addon in `main.js`

```js
export default {
  addons: ["@storybook/addon-designs"],
};
```

### 3. Add it to story!

```js
export default {
  title: "My stories",
  component: Button,
};

export const myStory = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
};
```

## Similar projects

- Adobe XD: [storybook-addon-xd-designs](https://github.com/morgs32/storybook-addon-xd-designs)
- Zeplin: [storybook-zeplin](https://github.com/mertkahyaoglu/storybook-zeplin)
- Abstract: [storybook-addons-abstract](https://github.com/amccloud/storybook-addons-abstract)
