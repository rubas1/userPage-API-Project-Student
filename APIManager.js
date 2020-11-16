//This is the class that will manage all your APIs

class Friends{
    constructor(first, last){
        this.firstname = first
        this.lastname = last
    }
}

class User extends Friends{
    constructor(first, last, city, state, pic){
        super(first, last)
        this.city = city
        this.state = state
        this.picture = pic
    }
}

class Pokemon{
    constructor(name, pic){
        this.name = name
        this.picture = pic
    }
}

class APIManager {
    constructor() {
        this.data = {
            user: {},
            friends: [],
            pokemon: {},
            favQuote:"",
            meatQuote:""
        }
    }
    getNewUsers(){
        $.ajax({
           method: "GET",
           url: 'https://randomuser.me/api/?results=7',
           success: (data) => {
               let user = new User(data.results[0].name.first, data.results[0].name.last, 
                data.results[0].location.city, data.results[0].location.state, data.results[0].picture.medium)
                this.data.user = user
                this.data.friends = []
                for(let i=1;i<7;i++){
                    let friend = new Friends(data.results[i].name.first, data.results[i].name.last)
                    this.data.friends.push(friend)
                }
            },
           error: function (xhr, text, error) {
               console.log(text)
           }
       })
    }
    getNewPokemon(){
        $.ajax({
            method: "GET",
            url: 'https://pokeapi.co/api/v2/ability',
            success:(data) => {
                let name = data.results[0].name.charAt(0).toUpperCase() +
                data.results[0].name.slice(1)
                let pokemon = new Pokemon(name,"pic") 
                this.data.pokemon = pokemon
             },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    getFavQuote(){
        $.ajax({
            method: "GET",
            url: 'https://api.kanye.rest',
            success:(data) => {
                this.data.favQuote = data.quote
             },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    getMeatQuote(){
        $.ajax({
            method: "GET",
            url: 'https://baconipsum.com/api/?type=meat/?paras=1',
            success: (data) => {
                this.data.meatQuote = data
             },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
   
}

