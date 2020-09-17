import './style.css'
import './prism-theme.css'
import Layout from './Layout.vue'
import { EnhanceAppContext } from 'vitepress'

export default {
  Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component,
  enhanceApp(ctx: EnhanceAppContext) {
    // ctx.app.component('Hello', HelloComponent)
  }
}
