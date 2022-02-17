import { createApp } from 'vue';
import { boardgamePlugin } from 'vue3-boardgame';

import App from './App.vue';
import router from './router';
import { client } from './client';

const app = createApp(App);

app.use(boardgamePlugin, {
  useProvide: true,
  useMixin: false,
  autostart: false,
  client
});
app.use(router);

app.mount('#app');
