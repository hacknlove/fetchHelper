# fetchHelper
![coverage 100%](https://img.shields.io/badge/coverage-100%25-brightgreen)

```
npm i @hacknlove/fetchhelper
```

Polymorphic fetch helper that allows you to pass the parameters in many ways, and brings you the response conveniently processed for your REST APIs, with no dependences and less than 600 bytes.

## Parameters

### As usual `fetchHelper(url, options)`
Same as calling `fetch(url, options)`

### As an array `fetchHelper([url, options])`
Same as calling `fetch(url, options)`

### Promise that will resolve in url `fetchHelper(promise, options)`
Same as calling `fetch(await promise, options)`

### Promise that will resolve in [url, options] `fetchHelper(promise)`
Same as calling `fetch(await promise)`

### Callfront that will return url `fetchHelper(callfront, options)`
Same as calling `fetch(callfront(), options)`

### Callfront that will return [url, options] `fetchHelper(callfront)`
Same as calling `fetch(callfront())`

### Callfront that will return a promise that will resolve to url `fetchHelper(callfront, options)`
Same as calling `fetch(await callfront(), options)`

### Callfront that will return a promise that will resolve to [url, options] `fetchHelper(callfront)`
Same as calling `fetch(await callfront())`

### options.json
It sets the body to JSON.stringify(options.json), and the Content-Type to application/json

## Return

It returns a promise that will resolve to `[response, error]`, and never rejects

### If fetch rejects to `error`
`[null, error]`

When

### If fetch resolves to `{ok: false, .....}`
`[null, {ok: false, .....}]`

### If fetch resolves to `{ok: true, ....}`
`[await response.json(), udefined]`

## Isomorphic

You can install the polyfill you want, or you can assign the `fetch` you like to `fetchHelper.fetch`

```
import myFetchLibrary from 'myfetchlibrary'
import fetchHelper from '@hacknlove/fetchhelper'

fetchHelper.fetch
```

## test this module

```
git clone https://github.com/hacknlove/fetchHelper.git
cd fetchHelper
npm install
npm test
```

## mock
I recomend to mock `fetch` instead
