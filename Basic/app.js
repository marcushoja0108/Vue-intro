// variabler
const app = Vue.createApp({
    data(){
        return {
            title: 'Game of Thrones',
            author: 'George R.R. Martin',
            age: 200
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        }
    }
})

app.mount('#app')

// mouse events
const app2 = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: 'Narnia',
            author: 'C.S. Lewis',
            age: 50,
            x: 0,
            y: 0,
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app2.mount('#app2')


// Lists og output, attribute binding
const app3 = Vue.createApp({
    data(){
        return {
            url: 'https://www.youtube.com/',
            showBooks: true,
            books: [
                {
                    title: 'The Lord of the Rings',
                    author: 'J.R.R Tolkien',
                    img: "jpg/1.jpg",
                    isFav: true
                },{
                    title: 'Narnia',
                    author: 'C.S. Lewis',
                    img: "jpg/2.jpg",
                    isFav: false
                },{
                    title: 'Game of Thrones',
                    author: 'George R.R. Martin',
                    img: "jpg/3.jpg",
                    isFav: true
                }
            ]
        }
    },
    methods: {
        toggleFav(book) {
            book.isFav = !book.isFav
        },
    },
    //computed er metoder som er avhenging av annen data, oppdateres etter dataen oppdateres
    computed: { 
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
})

app3.mount('#app3')