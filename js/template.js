new Vue({
    el: '#app',
    template: `
        <div class="app">
            <input type="text" v-model="name" />
            <ul>
                <li v-for="(item,index) in searchUsers" :key="index">
                    {{item['name']}}
                    {{item['age']}}
                </li>
            </ul>
            <h1>{{ name }}</h1>
        </div>
    `,
    data: {
        users: [{
                name: '张三',
                age: 20
            },
            {
                name: '李四',
                age: 20
            },
            {
                name: '王二',
                age: 20
            }
        ],
        name: ''
    },
    methods: {

    },
    computed: {
        searchUsers() {
            return this.users.filter((value, index) => {
                return value['name'].indexOf(this.name) > -1;
            });
        }
    },
    watch: {

    }
})