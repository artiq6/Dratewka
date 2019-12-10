DragonLive = true;
function chceckText(inputText) {
    console.log(inputText)
    if (inputText == "W" || inputText == "WEST") {
        console.log("west")
        testMove(Dratewka.x - 1, Dratewka.y, "WEST")
    }
    else if (inputText == "E" || inputText == "EAST") {
        console.log("east")
        testMove(Dratewka.x + 1, Dratewka.y, "EAST")
    }
    else if (inputText == "N" || inputText == "NORTH") {
        console.log("north")
        testMove(Dratewka.x, Dratewka.y - 1, "NORTH")
    }
    else if (inputText == "S" || inputText == "SOUTH") {
        console.log("south")
        testMove(Dratewka.x, Dratewka.y + 1, "SOUTH")
    }
    else if (inputText == "V" || inputText == "VOCABULARY") {
        console.log("vocabulary")
        alert("VOCABULARY")
    }
    else if (inputText == "G" || inputText == "GOSSIPS") {
        console.log("gossips")
        alert("GOSSIPS")
    }
    else if (inputText[0] == "T" || inputText.split(" ")[0] == "TAKE") {
        var itemName = inputText.split(" ")[1];
        console.log("take ", itemName)
        Take(itemName)
        //funkcja do Podnoszenia
    }
    else if (inputText[0] == "D" || inputText.split(" ")[0] == "DROP") {
        var itemName = inputText.split(" ")[1];
        console.log("drop ", itemName)
        Drop(itemName)
        //funkcja do Upuszczania
    }
    else if (inputText[0] == "U" || inputText.split(" ")[0] == "USE") {
        var itemName = inputText.split(" ")[1];
        console.log("use ", itemName)
        Use(itemName)
        //funkcja do Używania

    }
    else {
        console.log("ERROR INPUT")
        error("If you don't know commands open VOCABULARY");

    }
}

function error(text) {
    document.getElementById('whatnow').innerHTML = text;
    setTimeout(function () { UpdateUI(locations[Dratewka.y][Dratewka.x]) }, 2000);
}
//TEKST V I S
function alert(what) {
    //wyłączenie innych p aby się nie nakładały
    document.getElementById("input").style.display = "none";
    document.getElementById("text").style.display = "none";
    if (what == "GOSSIPS") {
        pressanykey = true;
        var p = document.createElement("p");
        p.id = "alert";

        p.innerText = "The  woodcutter lost  his home key...\nThe butcher likes fruit... The cooper\nis greedy... Dratewka plans to make a\npoisoned  bait for the dragon...  The\ntavern owner is buying food  from the\npickers... Making a rag from a bag...\nPress any key"
        document.getElementById('main').appendChild(p)

    }
    else if (what == "VOCABULARY") {
        pressanykey = true;
        var p = document.createElement("p");
        p.id = "alert";

        p.innerText = "NORTH or N, SOUTH or S\nWEST or W, EAST or E\nTAKE (object) or T (object)\nDROP (object) or D (object)\nUSE (object) or U (object)\nGOSSIPS or G, VOCABULARY or V\nPress any key"
        document.getElementById('main').appendChild(p)

    }
    whatnow.innerHTML = "";
}

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function stopAlert() {
    removeElement('alert');
    document.getElementById("input").style.display = "inherit";
    document.getElementById("text").style.display = "inherit";
    pressanykey = false;
}

//PRZEMIESZCZANIE SIĘ (CHODZENIE PO MAPIE)
function testMove(x, y, where) {
    var whatnow = document.getElementById('whatnow');

    //blokada pieczara smoka
    if (y.toString() + x.toString() == 41 && DragonLive == true) {
        console.log("tutej smok nie wejdziesz")
        DratewkaAlerts("You can't go that way... ")
        setTimeout(() => {
            DratewkaAlerts("The dragon sleeps in a cave!")
        }, 1200);
    }
    else {
        if (locations[Dratewka.y][Dratewka.x].move.includes(where)) {
            whatnow.innerHTML = "You are going " + where.toLowerCase() + "...";
            setTimeout(function () { Move(x, y) }, 500);
        }
        else {
            whatnow.innerHTML = "You can't go that way";
            setTimeout(function () { UpdateUI(locations[Dratewka.y][Dratewka.x]) }, 500);
        }
    }
}
function Move(x, y) {
    UpdateUI(locations[y][x])
    Dratewka.x = x;
    Dratewka.y = y;
}


function DratewkaAlerts(alertText) { 
    document.getElementById('whatnow').innerHTML = alertText;
    setTimeout(function () { UpdateUI(locations[Dratewka.y][Dratewka.x]) }, 1200);
}

//PODNOSZENIE PRZEDMIOTÓW 
function Take(itemName) {
    if (itemsNames.includes(itemName)) {
        var item = items[itemsNameToID[itemName][0]];
        var itemID = itemsNameToID[itemName][0];
        console.log(item, ":", itemID)

        var seeItem = document.getElementById("see").innerHTML;

        if (seeItem.includes(item[0])) {
            Dratewka.getitem(item, itemID);
        }
        else {
            console.log("NO ITEM THERE")
            error("There isn't anything like that here")
        }
    }
    else {
        console.log("ITEM NO EXIST")
        error("There isn't anything like that here")
    }
}

//UPUSZCZANIE PRZEDMIOTÓ 
function Drop(itemName) {
    if (Dratewka.eq.includes(itemName)) {
        if (locations[Dratewka.y][Dratewka.x].items[2] == null)
            Dratewka.dropitem();
        else
            error("You can't store any more here")
    }
    else {
        if (Dratewka.eq == null) {
            error("You are not carrying anything")
        }
        else
            error("You are not carrying it")
    }

}
function Use(itemName) {
    if (Dratewka.eq.includes(itemName)) {
        var itemID = itemsNameToID[itemName][0];
        console.log(itemID)
        Dratewka.useitem(itemID)
    }
    else
        error("YOU DONT HAVE " + itemName)
}

function killDragon() {
    console.log("smok teraz ginie")
    DragonLive = false;
    locations[4][3].image = "DS68.bmp"
    setTimeout(() => {
        DratewkaAlerts("The dragon ate your sheep and died!")
    }, 1500);
}
function Win() {
    overlay(1);
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src','win.mp3')
    audioElement.play();
    document.getElementById("overlay").style.backgroundImage = "url(img/win.gif)"
}
function Start() {
    overlay(1);
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'hejnal.mp3');
    audioElement.play();

    var i = 0;
    document.getElementById("overlay").style.backgroundImage = "url(img/intro" + i + ".jpg)"
    var interval = setInterval(() => {
        i++
        if (i == 3) {
            clearInterval(interval)
            overlay(0);
        }
        else {
            document.getElementById("overlay").style.backgroundImage = "url(img/intro" + i + ".jpg)"
        }
    }, 5500);
}

function overlay(on) {
    if (on == 1) {
        document.getElementById("main").style.display = "none";
        document.getElementById("compass").style.display = "none";
        document.getElementById("overlay").style.display = "block";
    }
    else {
        document.getElementById("main").style.display = "inherit";
        document.getElementById("compass").style.display = "inherit";
        document.getElementById("overlay").style.display = "none";
    }
}





/* function Gowniana(){
var tmp="";
    items.forEach(function(th){
        tmp+="'"+th[2].toString()+"',"
    })
    console.log(tmp)
} */
