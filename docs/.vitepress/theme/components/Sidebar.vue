<template>
  <aside :class="{hidden:!isOpenMobileSidebar}" class="sidebar sm:fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5">
    <Sidebar />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'
import Sidebar from 'vitepress/dist/client/theme-default/components/SideBar.vue'

export default {
  props: {
    isOpenMobileSidebar: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Sidebar,
  }
}
</script>

<style>
.sidebar {
  margin-top: 4rem;
}
</style>
