# fetchHelper

## Usage

```javascript
import fetchHelper from '@hacknlove/fetchhelper'

async function example1 () {
  const [response, error] = await fetchHelper(url, options)
  // the parameters are the same of fetch(url, options)
}

async function example2 () {
  const [response, error] = await fetchHelper([url, options])
}

async function example3 () {
  const [response, error] = await fetchHelper(() => [url, options])
}


```
