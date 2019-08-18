import test from 'ava'
import fetchHelper from './index'

test.serial('if params are (string, object) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper(url, options)
})

test.serial('if params are ([string, object], undefined) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper([url, options])
})

test.serial('if params are (Promise(string), object) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper(Promise.resolve(url), options)
})

test.serial('if params are (Promise([string, object]), undefined) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper(Promise.resolve([url, options]))
})

test.serial('if params are (() => string, object) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper(() => url, options)
})

test.serial('if params are (() => [string, object], undefined) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper(() => [url, options])
})

test.serial('if params are (() => Promise(string), object) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper(() => Promise.resolve(url), options)
})

test.serial('if params are (() => Promise([string, object]), undefined) it calls fetch(string, object)', async t => {
  const url = 'unaurl'
  const options = {
    foo: 'bar'
  }
  global.fetch = (u, o) => {
    t.is(u, url)
    t.deepEqual(o, options)

    return Promise.resolve(true)
  }
  await fetchHelper(() => Promise.resolve([url, options]))
})

test.serial('if fetch throws Error, returns [null, Error]', async t => {
  const error = new Error('bar')


  global.fetch = () => {
    return Promise.reject(error)
  }

  const response = await fetchHelper()
  t.deepEqual(response, [null, error])
})

test.serial('if fetch rejects Error, returns [null, Error]', async t => {
  const error = new Error('bar')


  global.fetch = () => {
    return Promise.reject(error)
  }

  const response = await fetchHelper()
  t.deepEqual(response, [null, error])
})

test.serial('if fetch resolve {ok: false, ...}, returns [null, {ok: false, ...}]', async t => {
  global.fetch = () => {
    return Promise.resolve({ok: false, foo: 'bar'})
  }

  const response = await fetchHelper()
  t.deepEqual(response, [null, {ok: false, foo: 'bar'}])

})

test.serial('if fetch resolve {ok: true, ...}, returns [{ok: true, ...}, undefined]', async t => {
  global.fetch = () => {
    return Promise.resolve({ok: true, json () { return { foo: 'bar' } }})
  }

  const response = await fetchHelper('', {})
  t.deepEqual(response, [{foo: 'bar'}, undefined])

})

test.serial('it calls custom fetch if assigned', async t => {
  fetchHelper.fetch = () => {
    t.pass()
    return Promise.resolve(true)
  }
  global.fetch = () => {
    t.fail()
    return Promise.resolve(true)
  }
  fetchHelper()
})
