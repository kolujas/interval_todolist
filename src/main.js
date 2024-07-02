import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')


// Generar una nueva versión en cada carga
const version = new Date().getTime();

// Actualizar los links de CSS y JS con la nueva versión
document.querySelectorAll('link[id], script[id]').forEach(element => {
  const srcAttr = element.tagName === 'LINK' ? 'href' : 'src';
  const url = new URL(element.getAttribute(srcAttr), window.location.href);
  url.searchParams.set('v', version);
  element.setAttribute(srcAttr, url.toString());
});
