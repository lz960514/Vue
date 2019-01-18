new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js'
    },
    mounted() {
        window.document.title = this.title;
    },
    computed: {

    },
    methods: {

    },
    watch: {

    }
})