/**
 * Calls fetch with some syntactic sugar in the parameters and the response
 * @param {*} url. Could be a string, an array [url, options], or a promise that will resolve to a string or an array [url, options]
 * @param {*} options if url is a string or a promise that will resolve to a string, options is the options object passed to fetch
 *
 * @returns [response, error]
 *
 * if !response.ok [null, response]
 */
async function fetchHelper (url, options) {
  const myFetch = fetchHelper.fetch || fetch
  if (typeof url === 'function') {
    url = url()
  }
  url = await url
  if (Array.isArray(url)) {
    options = url[1]
    url = url[0]
  }
  var response = await myFetch(url, options).catch(e => ({
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

module.exports = fetchHelper
