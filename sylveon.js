"use strict";

axios.get("https://pokeapi.co/api/v2/pokemon/700/")

.then((response) => {
    const data = response.data;
    console.log(data);


    let array = [];
    for(let i=0; i < data.abilities.length; i++){
        
        array.push(data.abilities[i].ability.name);
    }
            

let sylveon = new Pokemon (
    data.forms[0].name,
    array,
    data.stats[4].base_stat,
    data.stats[3].base_stat,
    data.stats[5].base_stat
)
    console.log(sylveon);


    document.getElementById("sylveon").innerHTML += `<p>${"Name"}</span><span class="value"><br><strong><em>${ sylveon.name }</strong></p></em></div>`
    document.getElementById("sylveon").innerHTML += `<p>${"Abilities" }<span class="value"><br><strong><em>${ sylveon.abilities }</strong></em></p>`     
    document.getElementById("sylveon").innerHTML += `<p>${"Attack" }<span class="value"><br><strong><em>${ sylveon.attack }</strong></em></p>`
    document.getElementById("sylveon").innerHTML += `<p>${"Defense" }<span class="value"><br><strong><em>${ sylveon.defense}</strong></em></p>`
    document.getElementById("sylveon").innerHTML += `<p>${"HP" }<span class="value"><br><strong><em>${ sylveon.hp }</strong></em></p>`
    
    document.getElementById("sylveon").style.fontFamily = "VT323";
    document.getElementById("sylveon").style.fontSize = "24px";
});
