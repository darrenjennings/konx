<template>
  <div class="text-gray-900 leading-normal w-full max-w-screen-xl mx-auto px-6 bg-white antialiased js-focus-visible">
    <Header class="h-16" @toggleSidebar="e => isOpenMobileSidebar = e"/>
    <div class="lg:flex -mx-6">
      <Sidebar :isOpenMobileSidebar="isOpenMobileSidebar"/>
      <main class="pt-24 min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
        <article class="prose markdown px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
          <Content />
        </article>
        <footer class="my-16 px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
          <NextPrevious />
        </footer>
      </main>
    </div>
    <Debug v-if="isDevelopment" />
  </div>
</template>

<script lang="ts">
import Vue, { defineComponent, ref } from 'vue'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import NextPrevious from './components/NextPrevious.vue'
import { Debug } from 'vitepress'

export default defineComponent({
  components: { 
    Header,
    Sidebar,
    NextPrevious,
    Debug
  },
  setup(props, context) {
    const isOpenMobileSidebar = ref(false)    
    
    return {
      isDevelopment: process.env.NODE_ENV === 'development',
      isOpenMobileSidebar
    }
  }
})
</script>
