//https://pokeapi.co/api/v2/generation/1



$(function(){


    const pokemon= "https://pokeapi.co/api/v2/generation/1"

    $.getJSON(pokemon,{
        format: JSON
    }).done(function(pokemonData){
        console.log("pokemonData",pokemonData)
        $.each(pokemonData.pokemon_species, function(index, item){
           
            console.log("index",index+1)
            console.log("item",item)
           const pokemonName= item.name
           const pokeData = $("<p>").html("Pokemon name is ---------"+ pokemonName)
           pokeData.appendTo("#pokemonContainer")



             
        })

    }).fail(function(){
        console.log("it failed :(")
    })
})

