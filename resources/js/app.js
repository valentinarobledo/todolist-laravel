
require('./bootstrap');

window.Vue = require('vue');

Vue.component('tasks-component', require('./components/TasksComponent.vue').default);


const app = new Vue({
    el: '#app',
    
    data: {
    	
    },
    methods: {
    	
    }
});
