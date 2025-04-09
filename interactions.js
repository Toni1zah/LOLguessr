const championsQuotes = {
    Aphelios: ["I am your sister. I am listening."],
    Sett: ["If I ever find my old man... well, I hope he's been trainin'."],
    Garen: ["For Demacia."],
    Kayle: ["The law does not tolerate imperfection. I am no exception."],
    Braum: ["Even heaviest door can be opened."],
    Elise: ["Pull the strings. Watch them dance."],
    Nidalee: ["Human, beast, Vastaya... These words mean nothing to me."],
    Rengar: ["A true hunter never rests."],
    Akali: ["Fear the assassin with no master."],
    Vi: ["I let my hands do the talking."],
    Pyke: ["My kill list never gets shorter."],
    Lux: ["Lighting the way."],
    Velkoz: ["It seems your chances of survival are... less than zero!"],
    Khazix: ["Position for ambush."],
    Jhin: ["In carnage, I bloom, like a flower in the dawn."],
    Zed: ["The unseen blade is the deadliest."],
    Ahri: ["Don't you trust me?"],
    Yasuo: ["Death is like the wind – always by my side."],
    Darius: ["They will regret opposing me."],
    Shaco: ["How about a magic trick?"],
    Katarina: ["Violence solves everything."],
    Fizz: ["You smell like burning!"],
    Viego: ["She was the light of my life... the edge of my blade."],
    Mordekaiser: ["All will drown in my darkness."],
    Veigar: ["I am evil! Stop laughing!"],
    Singed: ["How about a drink?"],
    Ekko: ["Let's make them notice."],
    Swain: ["Their bones will litter the ground."],
    Riven: ["There is a sword that answers every question."],
    Jinx: ["Rules are made to be broken… like buildings! Or people!"],
    Viktor: ["A new era begins."],
    Draven: ["Draven does it all… with style."],
    Teemo: ["Captain Teemo on duty!"],
    Nasus: ["The cycle of life and death continues. We will live, they will die."],
    Zoe: ["You’re not gonna like this!"],
    LeBlanc: ["Trust me."],
    Warwick: ["Blood runs... they all run."],
    Nocturne: ["Darknessssss..."],
    Aatrox: ["I was not reborn in the depths. I merely refused to die."],
    Kindred: ["Tell me again, little Lamb, which things are mine to take?"]
};

const champions = Object.keys(championsQuotes);

let randomIndex = Math.floor(Math.random() * champions.length);

let chosenChampion = champions[randomIndex];

let chosenQuote = championsQuotes[chosenChampion];

if (chosenQuote && chosenQuote.length > 0) {
  console.log(`${chosenChampion}: "${chosenQuote[0]}" is the chosen champion`);
} else {
  console.log("No quote found for the chosen champion.");
}

// Choosing background

window.onload = function () {
  let Images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
  let randomIndexImg = Math.floor(Math.random() * Images.length);
  let chosenbg = Images[randomIndexImg];

  console.log(chosenbg);

  document.documentElement.style.backgroundImage = `url('${chosenbg}')`;
};

let Correct = false;
let correcttxtExists = false;
let correcttxt = null;

// CHECK NAMEEEEEEEEEEE

function CheckName() {
  const inputtext = document.getElementById("ChampionInput").value;
  const btn = document.getElementById("Btn")

  if (correcttxtExists === false) {
      console.log("CreatedCorrectElement")
      correcttxtExists = true;
      correcttxt = document.createElement('h3');
      document.body.appendChild(correcttxt);
  }

  if (Correct === false) {
    if (inputtext === chosenChampion) {
      console.log("Correct!");
      Correct = true;

      correcttxt.innerHTML = "Correct!"
      correcttxt.id = "Correct"
        
      btn.innerHTML = "Play again"
    } else {

      correcttxt.innerHTML = "Wrong."
      correcttxt.id = "Wrong"
        
      console.log("Wrong.");
    }
  } else {
    location.reload();
  }
}

function Play() {
  const title = document.getElementById("title");
  const btn = document.getElementById("PlayButton");
  title.remove();
  btn.remove();

  const quoteHeader = document.createElement('h1');
  quoteHeader.innerHTML = "'" + chosenQuote + "'"; 
  document.body.appendChild(quoteHeader);

  const inputbox = document.createElement('input');
  inputbox.placeholder = "Input champion name here.";
  document.body.appendChild(inputbox);
  inputbox.id = "ChampionInput";

  const checkbtn = document.createElement('button');
  checkbtn.innerHTML = "Check";
  checkbtn.className = "hvr-float";
  checkbtn.id = "Btn"
  checkbtn.onclick = CheckName;
  document.body.appendChild(checkbtn);
}
