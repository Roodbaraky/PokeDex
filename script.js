const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

async function checkDex(){

 try {
 const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const response = await fetch(`${url}${searchTerm}`);
    const pokeList = await response.json();
    const {height, id, name, sprites, stats, types, weight} = pokeList;
    const pokeStats = stats.reduce((keyVal, element) =>{
        const {stat, base_stat} = element;
        keyVal[stat.name] = base_stat;
        return keyVal
    }, {});
    const imgUrl = sprites["front_default"];

    const pokeTypes = []
    types.forEach((type)=>pokeTypes.push(type["type"]["name"]))
    console.log(pokeStats, imgUrl);

    //Print to HTML elements

    //left side
    const printName = document.getElementById("pokemon-name");
    const printId = document.getElementById("pokemon-id");
    const printSprite = document.getElementById("sprite-container");
    const printTypes = document.getElementById("types");
    const printWeight = document.getElementById("weight");
    const printHeight = document.getElementById("height");
    
    printName.innerText = name.toUpperCase();
    printId.innerText = `#${id}`;
     printWeight.innerText = `WEIGHT: ${weight}`;
     printHeight.innerText = `HEIGHT: ${height}`;
    printSprite.innerHTML = `<img id="sprite" src="${imgUrl}" alt="${name} front default sprite">`;

   
pokeTypes.forEach((item, index, arr)=>{
arr[index] = `<span class="${item}">${item.toUpperCase()}</span>`
     });
      printTypes.innerHTML =pokeTypes.join(' ');

     //right side
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
console.log(pokeStats);

   hp.innerText = pokeStats['hp'];
    attack.innerText = pokeStats['attack'];
    defense.innerText = pokeStats['defense'];
    specialAttack.innerText = pokeStats['special-attack'];
    specialDefense.innerText = pokeStats['special-defense'];
    speed.innerText = pokeStats['speed'];
 
}catch{
    alert("Pokémon not found");
};
};


