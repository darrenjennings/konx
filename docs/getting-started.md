# Getting Started

## Installation

```shell
yarn add swrv
```

If you want to try out Vue 3 support (beta), install the beta release and check
out the Vite example.

```shell
yarn add swrv@beta
```

```vue
<template>
  <div>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>hello {{ data.name }}</div>
  </div>
</template>

<script lang="ts">
import useSWRV from 'swrv'

export default {
  name: 'Profile',

  setup() {
    const { data, error } = useSWRV('/api/user', fetcher)

    return {
      data,
      error,
    }
  },
}
</script>
```

In this example, useSWRV accepts a key and a fetcher function. key is a unique
identifier of the request, normally the URL of the API. And the fetcher accepts
key as its parameter and returns the data asynchronously.

`useSWRV` also returns 2 values: `data` and `error`. When the request (fetcher)
is not yet finished, data will be undefined. And when we get a response, it sets
data and error based on the result of fetcher and rerenders the component. This
is because data and error are Vue
[Refs](https://v3.vuejs.org/api/refs-api.html), and their values will be set by
the fetcher response.

Note that fetcher can be any asynchronous function, so you can use your favorite
data-fetching library to handle that part.
