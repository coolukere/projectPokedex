"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/197/")

.then((response) => {
    const data = response.data;
    console.log(data);

let umbreon = new Pokemon (
    data.forms[0].name,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.abilities[0].ability.name
)
    console.log(umbreon);


    document.getElementById("umbreon").innerHTML += `<p>${"Name"}</span><span class="value"><strong>${ umbreon.name }</strong></p></div>`
    document.getElementById("umbreon").innerHTML += `<p>${"Abilities" }<span class="value"><strong>${ umbreon.abilities }</strong></p>`     
    document.getElementById("umbreon").innerHTML += `<p>${"Attack" }<span class="value"><strong>${ umbreon.attack }</strong></p>`
    document.getElementById("umbreon").innerHTML += `<p>${"Defense" }<span class="value"><strong>${ umbreon.defense}</strong></p>`
    document.getElementById("umbreon").innerHTML += `<p>${"HP" }<span class="value"><strong>${ umbreon.hp }</strong></p>`
    
});
