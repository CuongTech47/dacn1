
import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import commom from './common'

const app = createApp(App)

app.use(router)
  .mixin(commom)
  .use(store)
  .use(ViewUIPlus)
  .mount('#app')
