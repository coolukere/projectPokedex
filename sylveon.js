"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/700/")

.then((response) => {
    const data = response.data;
    console.log(data);

let sylveon = new Pokemon (
    data.forms[0].name,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.abilities[0].ability.name
)
    console.log(sylveon);


    document.getElementById("sylveon").innerHTML += `<p>${"Name"}</span><span class="value"><strong>${ sylveon.name }</strong></p></div>`
    document.getElementById("sylveon").innerHTML += `<p>${"Abilities" }<span class="value"><strong>${ sylveon.abilities }</strong></p>`     
    document.getElementById("sylveon").innerHTML += `<p>${"Attack" }<span class="value"><strong>${ sylveon.attack }</strong></p>`
    document.getElementById("sylveon").innerHTML += `<p>${"Defense" }<span class="value"><strong>${ sylveon.defense}</strong></p>`
    document.getElementById("sylveon").innerHTML += `<p>${"HP" }<span class="value"><strong>${ sylveon.hp }</strong></p>`
    
});
