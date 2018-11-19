console.log("People Please Be Cool");

const myRequest = new Request('http://fizal.me/pokeapi/api/v2/id/25.json');
class pokemon{
  constructor(img, background, secondImg, bio, color, hilda, model){
    this.img = img;
    this.background = background;
    this.secondImg = secondImg;
    this.bio = bio;
    this.color = color;
    this.hilda = hilda;
    this.model = model
    // this.hp = hp;
    // this.attack = attack;
    // this.defense = defense;
    // this.abilities = abilities;
  }
  pokemon(element){
    let sprites = document.getElementById(element);
    let images = document.getElementById('poke_big');
    let backgrounds = document.getElementById("div_img_container");
    let header = document.getElementById('pokeName');
    let hilda = document.getElementById('img_hilda');
    let models = document.getElementById('model');
    sprites.addEventListener("click", function(){
      header.innerHTML = this.bio;
      header.style.color = this.color;
      images.src = this.img;
      backgrounds.style.backgroundImage = this.background;
      hilda.src = this.hilda;
      models.src = this.model;
      }.bind(this))
    }
    mouseover(){
      let images = document.getElementById('poke_big');
      images.addEventListener("mouseover", function(){
          images.src = this.secondImg;
      }.bind(this))
    }
    mouseout(){
      let images = document.getElementById('poke_big');
      images.addEventListener("mouseout", function(){
        images.src = this.img;
      }.bind(this))
    }
  }


axios.get('http://fizal.me/pokeapi/api/v2/name/lopunny.json')
  .then(function (response) {
    let sprite = response.data.sprites.front_shiny;
        document.getElementById('lop_spr').src = sprite;
    let lopunny = new pokemon("lop.png", "url(lop_back.jpg)", "lop_cute.jpg","Lopunny is a bipedal, rabbit-like Pokémon with a dark brown fur and a short, round tail.","#B47C4B", "hildaLop.png", "https://sketchfab.com/models/2006be17ff744821938456b19fa4d071/embed");
        lopunny.pokemon('lop_spr');
        lopunny.mouseover();
        lopunny.mouseout();

  });
axios.get('http://fizal.me/pokeapi/api/v2/name/gardevoir.json')
  .then(function (response) {
    let sprite = response.data.sprites.front_shiny;
        document.getElementById('gra_spr').src = sprite;
    let gardevior = new pokemon("gra.png", "url(gra_back.png)","gra_cute.png", "Gardevoir is a bipedal, humanoid Pokémon whose body resembles a flowing gown.","#9580BB" ,"https://vignette.wikia.nocookie.net/in-birth/images/6/60/Story-hil16.png/revision/latest?cb=20180302192818", "https://sketchfab.com/models/5a5c85abbdc744d8b2cf8d5d184b339b/embed");
        gardevior.pokemon('gra_spr');
        gardevior.mouseover();
        gardevior.mouseout();
  });
axios.get('http://fizal.me/pokeapi/api/v2/name/primarina.json')
  .then(function (response) {
    //variables
    let sprite = response.data.sprites.front_shiny;
        document.getElementById('pri_spr').src = sprite;
    let primarina = new pokemon("pri.png", "url(pri_back.jpg)", "pri_cute.jpg", "Primarina is a marine Pokémon that resembles a cross between a sea lion and a mermaid. ", "#007BC1", "https://vignette.wikia.nocookie.net/in-birth/images/1/14/Story-hil28.png/revision/latest?cb=20180302192956", "https://sketchfab.com/models/69ccb0543f8e439583d621f28e62af6f/embed");
        primarina.pokemon('pri_spr');
        primarina.mouseover();
        primarina.mouseout();
  });
