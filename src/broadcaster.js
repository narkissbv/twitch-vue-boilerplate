import { createApp } from 'vue'
import BroadcasterPage from './views/BroadcasterPage'
import store from './store'

createApp(BroadcasterPage)
.use(store)
.mount('#app')
