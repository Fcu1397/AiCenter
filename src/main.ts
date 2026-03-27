import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入樣式
import 'ant-design-vue/dist/reset.css'
import './styles/tailwind.css'

// 引入 AntD 全域元件庫
import Antd from 'ant-design-vue'

const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')

