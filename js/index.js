new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        isActive: false,
        boxHeight: 30
    },
    mounted() {
        window.document.title = this.title;
    },
    computed: {

    },
    methods: {
        toogleStyle() {
            this.isActive = !this.isActive
        },
        addWidth() {
            this.boxHeight += 10;
        }
    },
    watch: {

    }
})