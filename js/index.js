const vm = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue.js',
        users: [{
                name: 'liuze',
                age: 22,
                six: '男'
            },
            {
                name: '张三',
                age: '24',
                six: '男'
            },
            {
                name: '李四',
                age: '32',
                six: '男'
            },
            {
                name: '小红',
                age: '18',
                six: '女'
            }
        ],
        isAddUser: false,
        user: {
            name: '',
            age: '',
            six: ''
        },
        show: true,
        text: ''
    },
    mounted() {
        window.document.title = this.title;
    },
    computed: {

    },
    methods: {
        addUser() {
            Object.keys(this.user).forEach(key => {
                if (this.user[key]) this.isAddUser = true;
                else this.isAddUser = false;
            });
            if (this.isAddUser) {
                this.users.push(this.user);
            }
        },
        removeUser(index) {
            // console.log(index);
            this.users.splice(index, 1);
        },
        toogleBox() {
            this.show = !this.show;
        }
    },
    watch: {
        text(newValue, oldValue) {
            console.log(newValue)
        },
        user: {
            handler(newValue, oldValue) {
                console.log(newValue);
            },
            deep: true
        }
    },
})