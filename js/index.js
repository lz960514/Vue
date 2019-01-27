new Vue({
    el: '#app',
    data: {
        isOver: false,
        boxWidth: 500,
        value: 0
    },
    methods: {
        toogle() {
            this.isOver = !this.isOver
        },
        addWidth() {
            this.boxWidth += 10;
        },
        removeWidth() {
            this.boxWidth -= 10;
        }
    },
    computed: {

    },
    watch: {

    },
    created() {

    },
    mounted() {
        window.document.title = "css 样式处理"
    }
})