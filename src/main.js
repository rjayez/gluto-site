import { createApp, h} from 'vue'

import App from './App.vue'
import Drops from "./Drops.vue"
import "../index.css";


const NotFoundComponent = { template: '<p>Page not found</p>' }


const routes = {
    '/': App,
    '/drops': Drops
}

const Router = {
    data : () => ({
        currentRoute: window.location.pathname
    }),
    computed:{
        CurrentComponent(){
            return routes[this.currentRoute] || App
        }
    },
    render() {
        return h(this.CurrentComponent)
    }
}


// if (process.env.NODE_ENV === 'development') {
//     devtools.connect();
// }

createApp(Router)
    .mount('#app')
