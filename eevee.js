"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/133/")

.then((response) => {
    const data = response.data;
    console.log(data);

let eevee = new Pokemon (
    data.forms[0].name,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.abilities[0].ability.name
)
    console.log(eevee);


    document.getElementById("eevee").innerHTML += `<p>${"Name"}</span><span class="value"><strong>${ eevee.name }</strong></p></div>`
    document.getElementById("eevee").innerHTML += `<p>${"Abilities" }<span class="value"><strong>${ eevee.abilities }</strong></p>`     
    document.getElementById("eevee").innerHTML += `<p>${"Attack" }<span class="value"><strong>${ eevee.attack }</strong></p>`
    document.getElementById("eevee").innerHTML += `<p>${"Defense" }<span class="value"><strong>${ eevee.defense}</strong></p>`
    document.getElementById("eevee").innerHTML += `<p>${"HP" }<span class="value"><strong>${ eevee.hp }</strong></p>`
    
});
