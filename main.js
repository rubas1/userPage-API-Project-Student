const apiManager = new APIManager()
const render = new Renderer()
$('#load').on("click", function(){
    apiManager.getNewUsers()
    apiManager.getNewPokemon()
    apiManager.getFavQuote()
    apiManager.getMeatQuote()
})
$('#display').on("click", function(){
    render.rendeUser(apiManager.data.user)
    render.rendeFriends(apiManager.data.friends)
    render.renderfavQ(apiManager.data.favQuote)
    render.renderPokemon(apiManager.data.pokemon)
    render.renderMeat(apiManager.data.meatQuote)
})


