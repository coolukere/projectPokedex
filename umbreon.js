"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/197/")

.then((response) => {
    const data = response.data;
    console.log(data);


    let array = [];
    for(let i=0; i < data.abilities.length; i++){
        
        array.push(data.abilities[i].ability.name);
    }
        

let umbreon = new Pokemon (
    data.forms[0].name,
    array,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.stats[5].base_stat
)
    console.log(umbreon);


    document.getElementById("umbreon").innerHTML += `<p>${"Name"}</span><span class="value"><br><strong><em>${ umbreon.name }</strong></p></em></div>`
    document.getElementById("umbreon").innerHTML += `<p>${"Abilities" }<span class="value"><br><strong><em>${ umbreon.abilities }</strong></em></p>`     
    document.getElementById("umbreon").innerHTML += `<p>${"Attack" }<span class="value"><br><strong><em>${ umbreon.attack }</strong></em></p>`
    document.getElementById("umbreon").innerHTML += `<p>${"Defense" }<span class="value"><br><strong><em>${ umbreon.defense}</strong></em></p>`
    document.getElementById("umbreon").innerHTML += `<p>${"HP" }<span class="value"><br><strong><em>${ umbreon.hp }</strong></em></p>`
    
    document.getElementById("umbreon").style.fontFamily = "VT323";
    document.getElementById("umbreon").style.fontSize = "24px";
});
