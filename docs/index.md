# swrv

[![](https://img.shields.io/npm/v/swrv.svg)](https://www.npmjs.com/package/swrv)

swrv (pronounced "swerve") is a library using the @vue/composition-api for
remote data fetching. It is largely a port of swr.

The name “SWR” is derived from stale-while-revalidate, a cache invalidation
strategy popularized by HTTP RFC 5861. SWR first returns the data from cache
(stale), then sends the fetch request (revalidate), and finally comes with the
up-to-date data again.

Features:

Transport and protocol agnostic data fetching Fast page navigation Revalidation
on focus Interval polling Request deduplication TypeScript ready Minimal API
stale-if-error Customizable cache implementation SSR support Vue 3 Support With
swrv, components will get a stream of data updates constantly and automatically.
Thus, the UI will be always fast and reactive.
