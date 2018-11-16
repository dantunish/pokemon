console.log("People Please Be Cool");

const myRequest = new Request('http://fizal.me/pokeapi/api/v2/id/25.json');
class pokemon{
  constructor(img, background){
    this.img = img;
    this.background = background;
    // this.hp = hp;
    // this.attack = attack;
    // this.defense = defense;
    // this.abilities = abilities;
  }
  pokemin(){

  }
}

let header = document.getElementById("pokeName");
let images = document.getElementById('poke_big');
let backgrounds = document.getElementById("div_img_container");
// where the poke info comes from
axios.get('http://fizal.me/pokeapi/api/v2/name/lopunny.json')
  .then(function (response) {
    let the = response.data.sprites.front_shiny;
    console.log(response.data);
    // variables
    let sprites = document.getElementById('lop_spr');
    let lopunny = new pokemon("lop.png", "url(lop_back.jpg)");
      // Sprites effects
          sprites.src= the;
      // Sprite events
          sprites.addEventListener("click", function(){
            header.innerHTML = "Lopunny is a bipedal, rabbit-like Pokémon with a dark brown fur and a short, round tail."
            header.style.color = "#B47C4B";
            images.src = lopunny.img;
      backgrounds.style.backgroundImage = lopunny.background;
      //Big Pictures
      document.getElementById('poke_big').addEventListener("mouseover", function(){
        document.getElementById('poke_big').src = "lop_cute.jpg";
          });
      document.getElementById('poke_big').addEventListener("mouseout", function(){
        document.getElementById('poke_big').src = 'lop.png';
    });
  });

});



axios.get('http://fizal.me/pokeapi/api/v2/name/gardevoir.json')
  .then(function (response) {
        //variables
    let the = response.data.sprites.front_shiny;
    let sprite = document.getElementById('gra_spr');
    // sprite
      sprite.src = the;
    // sprite events
          sprite.addEventListener("click", function(){
          header.innerHTML =  "Gardevoir is a bipedal, humanoid Pokémon whose body resembles a flowing gown."
          header.style.color = "#9580BB";
          let gardevoir = new pokemon("gra.png", "url(gra_back.png)");
          images.src = gardevoir.img;
          backgrounds.style.backgroundImage = gardevoir.background;

          document.getElementById('poke_big').addEventListener("mouseover", function(){
            document.getElementById('poke_big').src = "gra_cute.png";
            });
            document.getElementById('poke_big').addEventListener("mouseout", function(){
              document.getElementById('poke_big').src = 'gra.png';
            });
  });
});

axios.get('http://fizal.me/pokeapi/api/v2/name/primarina.json')
  .then(function (response) {
    //variables
let the = response.data.sprites.front_shiny;
let sprite = document.getElementById('pri_spr');

  sprite.src = the;
//sprite events
  sprite.addEventListener("click", function(){
  header.innerHTML =  "Primarina is a marine Pokémon that resembles a cross between a sea lion and a mermaid.";
  header.style.color = "#0078C0";
  // class
  let primarina = new pokemon("pri.png", "url(pri_back.jpg)");
  images.src = primarina.img;
  backgrounds.style.backgroundImage = primarina.background;
// big pic changes
  document.getElementById('poke_big').addEventListener("mouseover", function(){
    document.getElementById('poke_big').src = "pri_cute.jpg";
    });
  document.getElementById('poke_big').addEventListener("mouseout", function(){
    document.getElementById('poke_big').src = 'pri.png';
    });
  });
});
