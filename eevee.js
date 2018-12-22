"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/133/")

.then((response) => {
    const data = response.data;
    console.log(data);


let array = [];
    for(let i=0; i < data.abilities.length; i++){
        
        array.push(data.abilities[i].ability.name);
    }
        

let eevee = new Pokemon (
    data.forms[0].name,
    array,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.stats[5].base_stat
)

    console.log(eevee);


    document.getElementById("eevee").innerHTML += `<p>${"Name"}</span><span class="value"><br><em>${ eevee.name }</strong></p></div>`
    document.getElementById("eevee").innerHTML += `<p>${"Abilities" }<span class="value"><br><em>${ eevee.abilities }</strong></p>`     
    document.getElementById("eevee").innerHTML += `<p>${"Attack" }<span class="value"><br><em>${ eevee.attack }</strong></p>`
    document.getElementById("eevee").innerHTML += `<p>${"Defense" }<span class="value"><br><em>${ eevee.defense }</strong></p>`
    document.getElementById("eevee").innerHTML += `<p>${"HP" }<span class="value"><br><em>${ eevee.hp }</strong></p>`
    
    document.getElementById("eevee").style.fontFamily = "VT323";
    document.getElementById("eevee").style.fontSize = "24px";
});
