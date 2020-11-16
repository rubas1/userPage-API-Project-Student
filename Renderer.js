
class Renderer {
    constructor(){}
    rendeUser(user){
        $('.user-container').empty()
        const source = $('#user-template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({user})
        $('.user-container').append(newHTML)  
    }
    rendeFriends(friends){
        $('.friends-container').empty()
        const source = $('#friends-template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({friends})
        $('.friends-container').append(newHTML)  
    }
    renderfavQ(favQuote){
        $('.quote-container').empty()
        const source = $('#quote-template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({favQuote}) 
        $('.quote-container').append(newHTML) 
    }
    renderPokemon(pokemon){
        $('.pokemon-container').empty()
        const source = $('#pokemon-template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({pokemon}) 
        $('.pokemon-container').append(newHTML) 
    }
    renderMeat(meatQ){
        $('.meat-container').empty()
        const source = $('#meat-template').html()
        const template = Handlebars.compile(source)
        let newHTML = template({meatQ}) 
        $('.meat-container').append(newHTML) 
    }
}