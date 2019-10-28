🚨 No longer maintained. Moved to [reallyland/really-elements](https://github.com/reallyland/really-elements). 🚨

<div align="center" style="text-align: center;">
  <h1 style="border-bottom: none;">@reallyland/really-clipboard-copy</h1>

  <p>Copy content to clipboard</p>
</div>

<hr />

<a href="https://www.buymeacoffee.com/RLmMhgXFb" target="_blank" rel="noopener noreferrer"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 20px !important;width: auto !important;" ></a>
[![tippin.me][tippin-me-badge]][tippin-me-url]
[![Follow me][follow-me-badge]][follow-me-url]

[![Version][version-badge]][version-url]
[![lit-element][lit-element-version-badge]][lit-element-url]
[![Node version][node-version-badge]][node-version-url]
[![MIT License][mit-license-badge]][mit-license-url]

[![Downloads][downloads-badge]][downloads-url]
[![Total downloads][total-downloads-badge]][downloads-url]
[![Packagephobia][packagephobia-badge]][packagephobia-url]
[![Bundlephobia][bundlephobia-badge]][bundlephobia-url]

[![CircleCI][circleci-badge]][circleci-url]
[![Dependency Status][daviddm-badge]][daviddm-url]

[![codebeat badge][codebeat-badge]][codebeat-url]
[![Codacy Badge][codacy-badge]][codacy-url]
[![Code of Conduct][coc-badge]][coc-url]

> Better element for the web

## Table of contents <!-- omit in toc -->

- [Pre-requisites](#pre-requisites)
- [Installation](#installation)
- [Usage](#usage)
- [Browser compatibility](#browser-compatibility)
- [API references](#api-references)
- [Demo](#demo)
- [License](#license)

## Pre-requisites

- [Java 8][java-url] _(`web-component-tester` works without any issue with Java 8)_
- [Node.js][nodejs-url] >= 8.16.0
- [NPM][npm-url] >= 6.4.1 ([NPM][npm-url] comes with [Node.js][nodejs-url], no separate installation is required.)
- (Optional for non-[VS Code][vscode-url] users) [Syntax Highlighting for lit-html in VS Code][vscode-lit-html-url]
- [web-component-tester][web-component-tester-url] >= 6.9.2 (For running tests, it's recommended to install globally on your system due to its insanely huge install size by running `npm i -g web-component-tester`.)

## Installation

```sh
# Install via NPM
$ npm install @reallyland/really-clipboard-copy
```

## Usage

**index.html**

```html
<html>
  <head>
    <script type="module">
      import 'https://unpkg.com/@reallyland/really-clipboard-copy@latest/dist/really-clipboard-copy.js?module';

      const asyncCopyEl = document.body.querySelector('.async-copy');
      const syncCopyEl = document.body.querySelector('.sync-copy');

      asyncCopyEl.addEventListener('copy-success', (ev) => {
        const { value } = ev.detail || {};
        console.log(`Copied value is ${value}`);
      });
      asyncCopyEl.addEventListener('copy-error', (ev) => {
        const { reason } = ev.detail || {};
        console.error(reason);
      });

      syncCopyEl.addEventListener('copy-success', (ev) => {
        const { value } = ev.detail || {};
        console.log(`Copied value is ${value}`);
      });
      syncCopyEl.addEventListener('copy-error', (ev) => {
        const { reason } = ev.detail || {};
        console.error(reason);
      });
    </script>
  </head>

  <body>
    <h2>Copy input text using Async Clipboard API if supported</h2>
    <really-clipboard-copy class="async-copy">
      <input copy-id="copiable" type="text" readonly value="Hello, World!" />
      <button copy-for="copiable">Copy</button>
    </really-clipboard-copy>

    <h2>Copy input text only using document.execCommand('copy')</h2>
    <really-clipboard-copy class="sync-copy" sync>
      <input copy-id="copiable" type="text" readonly value="Hello, World!" />
      <button copy-for="copiable">Copy</button>
    </really-clipboard-copy>
  </body>
</html>
```

## Browser compatibility

`really-clipboard-copy` works in all major browsers (Chrome, Firefox, IE, Edge, Safari, and Opera).

[Heavily tested](/.circleci/config.yml) on the following browsers:

| Name | OS |
| --- | --- |
| Internet Explorer 11 | Windows 7 |
| Edge 13 | Windows 10 |
| Edge 17 | Windows 10 |
| Safari 9 | Mac OS X 10.11 |
| Safari 10.1 | Mac OS 10.12 |
| Chrome 41 ([WRE][wre-url]) | Linux |
| Chrome 69 ([WRE 2019][wre-2019-url]) | Windows 10 |
| Firefox 62 (w/o native Shadow DOM) | macOS Mojave (10.14) |
| Firefox 63 (native Shadow DOM support) | Windows 10 |

## API references

- [ReallyClipboardCopy]

## Demo

[Demo@StackBlitz]

## License

[MIT License](https://motss.mit-license.org/) © Rong Sen Ng (motss)

<!-- References -->
[typescript-url]: https://github.com/Microsoft/TypeScript
[java-url]: https://www.java.com/en/download
[nodejs-url]: https://nodejs.org
[npm-url]: https://www.npmjs.com
[lit-element-url]: https://github.com/Polymer/lit-element?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=motss/app-datepicker
[node-releases-url]: https://nodejs.org/en/download/releases
[vscode-url]: https://code.visualstudio.com
[vscode-lit-html-url]: https://github.com/mjbvz/vscode-lit-html
[web-component-tester-url]: https://github.com/Polymer/tools/tree/master/packages/web-component-tester
[wre-url]: https://developers.google.com/search/docs/guides/rendering
[wre-2019-url]: https://www.deepcrawl.com/blog/news/what-version-of-chrome-is-google-actually-using-for-rendering
[ReallyClipboardCopy]: /api-references.md#reallyclipboardcopy
[Demo@StackBlitz]: https://really-clipboard-copy.stackblitz.io

<!-- MDN -->
[array-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[boolean-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[function-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[map-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[number-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[object-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[promise-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[regexp-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[set-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[string-mdn-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

<!-- Badges -->
[tippin-me-badge]: https://badgen.net/badge/%E2%9A%A1%EF%B8%8Ftippin.me/@igarshmyb/F0918E
[follow-me-badge]: https://flat.badgen.net/twitter/follow/igarshmyb?icon=twitter

[version-badge]: https://flat.badgen.net/npm/v/@reallyland/really-clipboard-copy?icon=npm
[lit-element-version-badge]: https://flat.badgen.net/npm/v/lit-element/latest?icon=npm&label=lit-element
[node-version-badge]: https://flat.badgen.net/npm/node/@reallyland/really-clipboard-copy
[mit-license-badge]: https://flat.badgen.net/npm/license/@reallyland/really-clipboard-copy

[downloads-badge]: https://flat.badgen.net/npm/dm/@reallyland/really-clipboard-copy
[total-downloads-badge]: https://flat.badgen.net/npm/dt/@reallyland/really-clipboard-copy?label=total%20downloads
[packagephobia-badge]: https://flat.badgen.net/packagephobia/install/@reallyland/really-clipboard-copy
[bundlephobia-badge]: https://flat.badgen.net/bundlephobia/minzip/@reallyland/really-clipboard-copy

[circleci-badge]: https://flat.badgen.net/circleci/github/reallyland/really-clipboard-copy?icon=circleci
[daviddm-badge]: https://flat.badgen.net/david/dep/reallyland/really-clipboard-copy

[codebeat-badge]: https://codebeat.co/badges/e363cf9f-88d5-4118-8190-364c7691a6e8
[codacy-badge]: https://api.codacy.com/project/badge/Grade/e02c3d95e6274493a66ae02c604de252
[coc-badge]: https://flat.badgen.net/badge/code%20of/conduct/pink

<!-- Links -->
[tippin-me-url]: https://tippin.me/@igarshmyb
[follow-me-url]: https://twitter.com/igarshmyb?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=@reallyland/really-clipboard-copy

[version-url]: https://www.npmjs.com/package/@reallyland/really-clipboard-copy/v/latest?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=@reallyland/really-clipboard-copy
[node-version-url]: https://nodejs.org/en/download?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=@reallyland/really-clipboard-copy
[mit-license-url]: https://github.com/reallyland/really-clipboard-copy/blob/master/LICENSE?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=@reallyland/really-clipboard-copy

[downloads-url]: https://www.npmtrends.com/@reallyland/really-clipboard-copy
[packagephobia-url]: https://packagephobia.now.sh/result?p=%40reallyland%2Freally-clipboard-copy
[bundlephobia-url]: https://bundlephobia.com/result?p=@reallyland/really-clipboard-copy

[circleci-url]: https://circleci.com/gh/reallyland/really-clipboard-copy/tree/master?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=@reallyland/really-clipboard-copy
[daviddm-url]: https://david-dm.org/reallyland/really-clipboard-copy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=@reallyland/really-clipboard-copy

[codebeat-url]: https://codebeat.co/projects/github-com-reallyland-really-clipboard-copy-master
[codacy-url]: https://www.codacy.com/app/motss/really-clipboard-copy?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=reallyland/really-clipboard-copy&amp;utm_campaign=Badge_Grade
[coc-url]: https://github.com/reallyland/really-clipboard-copy/blob/master/code-of-conduct.md
