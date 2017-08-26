# A seed project of Angular Universal app

A minimal Angular starter for Universal JavaScript using TypeScript, SASS and Webpack

> If you're looking for the Angular Universal repo go to [**angular/universal**](https://github.com/angular/universal)  

## Installation

* `npm install`

## Serve

* `npm start` to build your client app and start a web server
* `npm run build` to prepare a distributable bundle

## Development
* run `npm start` and `npm run watch` in two separate terminals to build your client app, start a web server, and allow file changes to update in realtime

## Prod
* `npm run build:prod` to compile the ngfactory files and build prod
* `npm run server` to start up the server

## Notes

> When building Universal components in Angular there are a few things to keep in mind.

 - **`window`**, **`document`**, **`navigator`**, and other browser types - _do not exist on the server_ - so using them, or any library that uses them (jQuery for example) will not work. You do have some options, if you truly need some of this functionality:
    - If you need to use them, consider limiting them to only your main.client and wrapping them situationally with the imported *isBrowser / isNode* features from Universal.  `import { isBrowser, isNode } from 'angular2-universal'`;
    - Another option is using `DOM` from ["@angular/platform-browser"](https://github.com/angular/angular/blob/e3687706c71beb7c9dbdae1bbb5fbbcea588c476/modules/%40angular/platform-browser/src/dom/dom_adapter.ts#L34)
 - **Don't manipulate the nativeElement directly**. Use the _Renderer_. We do this to ensure that in any environment we're able to change our view.
```
constructor(element: ElementRef, renderer: Renderer) {
  renderer.setElementStyle(element.nativeElement, 'font-size', 'x-large');
}
```
# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
