# API Route responding with 500

## Description

On each folder there is a separate project crated with `npx create-next-app@latest` (using page router) and each one with different versions of `@module-federation/nextjs-mf`, with webpack and plugins configured propperly

This repo is to demostrate the error happening after the version `8.1.4` of the `@module-federation/nextjs-mf` dependency, and also from the version `8.1.7` on, which yields a different error message.

## Steps to run this example

On each folder run:

`npm install`

and then 

`npm run build && npm run start`

Try reaching the route `localhost:3000/api/hello`

On the project with `@module-federation/nextjs-mf` version `8.1.3` it works as expected, but on the repo with `@module-federation/nextjs-mf` version `8.1.4` it returns a `500` as response with an html reponse type, executing the `_app` and `_document` files.

The error on the console is something like:
``` 
 ⨯ TypeError: o.setGlobalFederationConstructor is not a function
    at 5348 ([projectFolder]/.next/server/webpack-api-runtime.js:53:5542)
    at __webpack_require__ ([projectFolder]/.next/server/webpack-api-runtime.js:53:42279)
    at 440 ([projectFolder]/.next/server/webpack-api-runtime.js:53:36257)
    at __webpack_require__ ([projectFolder]/.next/server/webpack-api-runtime.js:53:42279)
    at 3780 ([projectFolder]/.next/server/webpack-api-runtime.js:1:66)
    at __webpack_require__ ([projectFolder]/.next/server/webpack-api-runtime.js:53:42279)
    at 8373 ([projectFolder]/.next/server/webpack-api-runtime.js:53:41509)
    at __webpack_require__ ([projectFolder]/.next/server/webpack-api-runtime.js:53:42279)
    at t ([projectFolder]/.next/server/webpack-api-runtime.js:54:2792)
    at [projectFolder]/.next/server/webpack-api-runtime.js:54:2925
```

After checking more versions of `@module-federation/nextjs-mf`, the error continue to happen, but from version `8.1.7` the error changes to the one below

```
 ⨯ TypeError: (void 0) is not a function
    at 6280 ([projectFolder]/.next/server/webpack-api-runtime.js:1:195)
    at __webpack_require__ ([projectFolder]/.next/server/webpack-api-runtime.js:53:52368)
    at 7672 ([projectFolder]/.next/server/webpack-api-runtime.js:53:50214)
    at __webpack_require__ ([projectFolder]/.next/server/webpack-api-runtime.js:53:52368)
    at t ([projectFolder]/.next/server/webpack-api-runtime.js:54:2792)
    at [projectFolder]/.next/server/webpack-api-runtime.js:54:2925
    at [projectFolder]/.next/server/webpack-api-runtime.js:54:2930
    at Object.<anonymous> ([projectFolder]/.next/server/webpack-api-runtime.js:54:2934)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
```