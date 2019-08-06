const fetch = require('node-fetch')
module.exports = async function fetchHelper (url, options) {
  url = await url
  if (Array.isArray(url)) {
    options = url[1]
    url = url[0]
  }
  var response = await fetch(url, options).catch(e => ({
    error: e
  }))

  if (response.error) {
    return [null, response.error]
  }

  if (!response.ok) {
    return [null, response]
  }

  try {
    response = await response.json()
  } catch (e) {
    return [null, e]
  }

  return [response, undefined]
}
