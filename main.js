console.log("People Please Be Cool");

const myRequest = new Request('https://fizal.me/pokeapi/api/v2/id/25.json');
class Pokemon{
  constructor(img, background, secondImg, bio, color, hilda, model, hp, attack, defense, abilities, name){
    this.img = img;
    this.background = background;
    this.secondImg = secondImg;
    this.bio = bio;
    this.color = color;
    this.hilda = hilda;
    this.model = model
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    this.name = name;
  }
  display(element){
    let sprites = document.getElementById(element);
    let images = document.getElementById("poke_mon");
    let backgrounds = document.getElementById("div_img_container");
    let header = document.getElementById('pokeName');
    let hilda = document.getElementById('img_hilda');
    let models = document.getElementById('model');
    let hp = document.getElementById('p_hp');
    let attack = document.getElementById('p_attack');
    let defense = document.getElementById('p_defense');
    let abilities = document.getElementById('p_abilties');
    let name = document.getElementById('p_name');
    let second = document.getElementById('img_second');
    sprites.addEventListener("click", function(){
      header.innerHTML = this.bio;
      header.style.color = this.color;
      images.src = this.img;
      backgrounds.style.backgroundImage = this.background;
      hilda.src = this.hilda;
      models.src = this.model;
      hp.innerHTML= "HP: " + this.hp;
      hp.style.color = this.color;
      attack.style.color = this.color;
      defense.style.color = this.color;
      abilities.style.color = this.color;
      attack.innerHTML = "Attack: " + this.attack;
      defense.innerHTML = "Defense: " + this.defense;
      abilities.innerHTML = "Abilities: " + "<br>"+ this.abilities;
      name.innerHTML = "Name: " + this.name;
      name.style.color = this.color;
      images.style.height = "200px";
      images.style.width = "200px";
      second.src = this.secondImg;
      }.bind(this))
    }
}
class Trainer{
  constructor(){
    this.pokemon = [];
  }
  all(name){
    return this.pokemon;
    for(let i = 0; i < this.pokemon.length; i++){
      if(name === this.pokemon[i].name){
        return this.pokemon[i];
      }
    }
  }
}
  let Hilda = new Trainer();

  let hilda = new Pokemon("https://img.fireden.net/v/image/1513/46/1513462400863.png", "url(https://i.ytimg.com/vi/P5HhAeIt0vM/maxresdefault.jpg)", "https://66.media.tumblr.com/0ffdf33c65d5064d12b967828d90c392/tumblr_pe3b001DAz1sk3s93o1_500.png", "Hilda is one of the leaders and founders of Amnesia.", "#FDFAFD", "https://vignette.wikia.nocookie.net/in-birth/images/6/6c/Profile-hilda.png/revision/latest?cb=20140823164035", "","300", "900", "1000", "The EXS of Light and Darkness,<br> Paradox", "Hilda");
    hilda.display("img_second");

axios.get('https://fizal.me/pokeapi/api/v2/name/lopunny.json')
  .then(function (response) {
    console.log(response.data.species.name);
    let sprite = response.data.sprites.front_shiny;
      for (var i = 0; i < response.data.abilities.length; i++) {
        let results= response.data.abilities[i].ability.name;
        console.log("Abilities: ", results);
      }
    let lopunny = new Pokemon("lop.png", "url(lop_back.jpg)", "lop_cute.jpg","Lopunny is a bipedal, rabbit-like Pokémon with a dark brown fur and a short, round tail.","#EEDDA5", "hildaLop.png", "https://sketchfab.com/models/2006be17ff744821938456b19fa4d071/embed?autostart=1",response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, response.data.species.name);
    document.getElementById('lop_spr').src = sprite;
        lopunny.display('lop_spr');
        Hilda.pokemon.push(lopunny);
  });

axios.get('https://fizal.me/pokeapi/api/v2/name/gardevoir.json')
  .then(function (response) {
    let sprite = response.data.sprites.front_shiny;
        document.getElementById('gra_spr').src = sprite;
        let gardevior = new Pokemon("gra.png", "url(gra_back.png)","gra_cute.png", "Gardevoir is a bipedal, humanoid Pokémon whose body resembles a flowing gown.","#A3CA9A" ,"https://vignette.wikia.nocookie.net/in-birth/images/6/60/Story-hil16.png/revision/latest?cb=20180302192818", "https://sketchfab.com/models/5a5c85abbdc744d8b2cf8d5d184b339b/embed?autostart=1",response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, response.data.species.name);
        gardevior.display('gra_spr');
        Hilda.pokemon.push(gardevior);
  });

axios.get('https://fizal.me/pokeapi/api/v2/name/primarina.json')
  .then(function (response) {
    let sprite = response.data.sprites.front_shiny;
        document.getElementById('pri_spr').src = sprite;
    let primarina = new Pokemon("pri.png", "url(pri_back.jpg)", "pri_cute.jpg", "Primarina is a marine Pokémon that resembles a cross between a sea lion and a mermaid. ", "#EAA6B1", "https://vignette.wikia.nocookie.net/in-birth/images/1/14/Story-hil28.png/revision/latest?cb=20180302192956", "https://sketchfab.com/models/69ccb0543f8e439583d621f28e62af6f/embed?autostart=1", response.data.stats[5].base_stat, response.data.stats[4].base_stat, response.data.stats[3].base_stat, response.data.abilities[0].ability.name, response.data.species.name);
        primarina.display('pri_spr');
        Hilda.pokemon.push(primarina);
  });
