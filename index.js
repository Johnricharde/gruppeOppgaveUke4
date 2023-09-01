// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');
let img = ['shiba1', 'shiba2', 'shiba3', 'shiba4'];

// moods[num]
let num = 1;

//Stats
let max = 25;

let sleep = max;

let wash = max;

let play = max;

let food = max;

//Mood = food + sleep+ wash+ play
let mood = 100;

let commited_a_crime = false
// Timer
let counter = 0;

// VIEW /////////////////////////////////////////////////////////////////////////////////

updateView();
{/* <img src="img/cheems_explainer.jng"> */}

function updateView() {
    let html2 = /*HTML*/`
    <img src="img/stopRightThereCriminalScum.png"> 
    <img src="img/RTABAKagc.png">
        `
    let html = /*HTML*/ `
    <div style="margin-bottom:50px;"></div>
<div class="container thick_border">
    <div class="tid"></div>

   <h2> Matsu </h2>
    <div id="background" class="border">
    <div class="mood">
    Health = ${mood}%
    <br>
    Food = ${food}
    <br>
    Sleep = ${sleep}
    <br>
    Wash = ${wash}
    <br>
    Play = ${play}</div>
        <div id="picture"><img src="img/${img[num]}.jpg"></div>
    </div>
    
    <div id="buttonLayout">
    <button onclick="do_the_thing('food')">Feed</button>
    <button onclick="do_the_thing('sleep')">Sleep</button>
    <button onclick="do_the_thing('wash')">Wash</button>
    <button onclick="do_the_thing('play')">Play</button>
    
    `
    // if (boolen)               boolen = true          else
    commited_a_crime == false ? app.innerHTML = html : app.innerHTML = html2;
};

// CONTROLLER ///////////////////////////////////////////////////////////////////////////

// function updateCounter()
//     food - hver second tar det en bort;
//     wash - annenhver annen second tar det en bort;
//     play - annenhver annen second tar det en bort;
//     sleep - hvær trejdie second;
function updateCounter() {
    counter++
    food--;
    if (counter % 2 == 0) {
        wash--;
        play--;
    }
    if (counter % 3 == 0) sleep--;
    update_all();
}

//1500 er en og en halv second

setInterval(updateCounter, 1500);

// enkel mood check som bytter på bilder
function pic_check() {
    // num er index på img listen 
    if (mood > 90) num = 1;
    if (mood <= 80) num = 0;
    if (mood <= 65) num = 2;
    if (mood <= 35) num = 3;
    if (mood < 0) {
        commited_a_crime = true
    }
    updateView()
}
//den her
function do_the_thing(action) {
    //if (true)    if food er mindre enn max så food = max
    if (action == 'food') food <max? food = max:null;

    if (action == 'sleep') sleep<max? sleep=max :null;
    
    if (action == 'wash') wash<max? wash=max:null;
    
    if (action == 'play') play<max? play=max:null;
    update_all()
}

function update_all() {
    vibe_check()
    pic_check()
    updateView()
}

//feil func
function vibe_check() {
    mood = 0;
    all = (play + wash + sleep + food)
    mood = Math.floor((all / (max*4)) *100)
}





// function fooding() {
//     if (food <= 25) {
//         food = 25;
//     }
//     update_all()
// }

// function sleeping() {
//     if (sleep <= 25) {
//         sleep = 25;
//     }
//     update_all()
// }
// function washing() {
//     if (wash <= 25) {
//         wash = 25;

//     }
//     update_all()
// }
// function playing() {
//     if (play <= 25) {
//         play = 25;
//     }
//     update_all()
// }

// function updateCounter() {
//     counter++
//     food - hver second tar det en bort;
//     wash - annenhver annen second tar det en bort;
//     play - annenhver annen second tar det en bort;
//     sleep - hvær trejdie second;
//     vibe_check()
//     updateView();
// }
