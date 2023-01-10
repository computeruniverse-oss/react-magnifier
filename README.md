# @computeruniverse/react-magnifier
[![Last commit](https://img.shields.io/github/last-commit/computeruniverse-oss/react-magnifier.svg)](https://github.com/computeruniverse-oss/react-magnifier/commits/main)
[![license](https://img.shields.io/github/license/computeruniverse-oss/react-magnifier)](https://github.com/computeruniverse-oss/react-magnifier/blob/main/LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)  
[![Downloads](https://img.shields.io/npm/dm/@computeruniverse/react-magnifier?color=blue)](https://www.npmjs.com/package/@computeruniverse/react-magnifier)
[![Activity](https://img.shields.io/github/commit-activity/m/computeruniverse-oss/react-magnifier.svg)](https://github.com/computeruniverse-oss/react-magnifier/commits/main)
[![Minified](https://img.shields.io/bundlephobia/min/@computeruniverse/react-magnifier?label=minified)](https://www.npmjs.com/package/@computeruniverse/react-magnifier)
[![npm](https://img.shields.io/npm/v/@computeruniverse/react-magnifier.svg)](https://www.npmjs.com/package/@computeruniverse/react-magnifier)

## Description
A simple and lightweight side-by-side Magnifier 

## Demo
https://computeruniverse-oss.github.io/react-magnifier

## Usage
### Install the package

Yarn
```shell
yarn add @computeruniverse/react-magnifier
```

NPM
```shell
npm install @computeruniverse/react-magnifier
```

### Add the component to your React application:

```ts
import Magnifier from "@computeruniverse/react-magnifier";

<Magnifier
    zoomImg={'https://picsum.photos/id/190/1000/1000'}
    zoomImgHeight={1000}
    zoomImgWidth={1000}
    offsetLeft={10}
    >
    <img src={'https://picsum.photos/id/190/400/400'} height={400} width={400} alt="Lorem picsum " />
</Magnifier>
```

## Props
| Name         | Type                              | Default | Description |
|--------------|-----------------------------------|---------|-------------|
|zoomImg       | `string`<br><sup>(required)</sup> |         | Path to the "Big"-Image that is used for the zoom |
|zoomImgWidth  | `number`<br><sup>(required)</sup> |         | "Big"-Image width |
|zoomImgHeight | `number`<br><sup>(required)</sup> |         | "Big"-Image height|
|offsetTop     | `number`                          | `0`     | top offset for the Zoom Portal |
|offsetLeft    | `number`                          | `0`     | left offset for the Zoom Portal |

## Development
Requirements: Node.js, Yarn
1. Clone this repository: `git clone https://github.com/computeruniverse-oss/react-magnifier.git`
2. Install all dependencies: yarn install
3. Start storybook `yarn storybook` so that you have a place where you can test your stuff.

## Contributing
Suggestions and contributions are always welcome! Please first discuss changes via issue before submitting a pull request.


## Publish
Since the packages moved to github we need to use the correct login command:
`npm login --scope=@Computeruniverse --registry=https://npm.pkg.github.com`
