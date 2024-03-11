const app = Vue.createApp({
    // template: `
    // <h1> Hello World </h1>
    // <p> Desde app.js </p>
    // `
    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            console.log("Hello World again")
            this.author = 'Gabriel Ravelo'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')