const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        //    this.title = 'Words of Radiance'
        }
    }
})

app.mount('#app')