<template>
  <div>
    <nav class="flex flex-row items-center justify-between">
      <div>
        <a v-if="previous" :href="previous.link" class="text-lg font-medium p-4 -m-4 no-underline text-gray-600 hover:text-blue-600 flex items-center mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="transform rotate-180 inline mr-1 flex-shrink-0">
            <path d="M3 12h18m0 0l-6.146-6M21 12l-6.146 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          {{previous.text}}
        </a>
      </div>
      <div>
        <a v-if="next" :href="next.link" class="text-lg font-medium p-4 -m-4 no-underline text-gray-600 hover:text-blue-600 flex items-center ml-2">
          {{next.text}}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="inline ml-1 flex-shrink-0">
            <path d="M3 12h18m0 0l-6.146-6M21 12l-6.146 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </a>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent, computed } from 'vue'
import { Debug, useSiteData, usePageData, useSiteDataByRoute } from 'vitepress'

export default defineComponent({
  setup () {
    const $site = useSiteDataByRoute()
    const $page = usePageData()
    
    const idx = computed(() => $site.value.themeConfig.sidebar.findIndex(i => {
      return i.title == $page.value.title || i.text == $page.value.title
    }))
    
    const previous = computed(() => {      
      return idx.value !== -1 && $site.value.themeConfig.sidebar.find((i, index) => index === idx.value - 1)
    })
    
    const next = computed(() => {      
      return idx.value !== -1 && $site.value.themeConfig.sidebar.find((i, index) => index === idx.value + 1)
    })

    return {
      previous, next
    }
  }
})
</script>

<style scoped>

</style>
