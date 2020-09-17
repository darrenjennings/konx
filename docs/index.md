# kong-{my-repo}

[![](https://img.shields.io/npm/v/swrv.svg)](https://www.npmjs.com/package/swrv)

```shell
yarn add swrv
```

```vue
<template>
  <div>
    <div v-if="error">failed to load</div>
    <div v-if="!data">loading...</div>
    <div v-else>hello {{ data.name }}</div>
  </div>
</template>

<script>
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
