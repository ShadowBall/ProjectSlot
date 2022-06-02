var coin = [new Audio("sounds/coin.mp3"),new Audio("sounds/coin.mp3"),new Audio("sounds/coin.mp3")]
var spin = [new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/coin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/coin.mp3"),new Audio("sounds/coin.mp3")]
var win = new Audio("sounds/win.mp3");
var lose = new Audio("sounds/lose.mp3");
var audio = false;
var spinning = false;
let message = document.getElementById("message")
var info = true;

function spinSlot(){
    function Hello() {
        alert("Hello, World");
     }
    if(spinning){return null;}
    spinning = true;
    var change = randomInt(1,4)*5
    var intslot1 = change + randomInt(1,5)
    var intslot2 = change +2*5+randomInt(1,5)
    var intslot3 = change+4*5+randomInt(1,5)

    var x = 0;
    var y = 0;
    var z = 0;
    var sound = 0
    message.innerHTML = "BOOK BOOK BOOOOOOK"
    slot1 = setInterval(spin1, 50);
    slot2 = setInterval(spin2, 50);
    slot3 = setInterval(spin3, 50);
    function spin1(){
        x++;
        if(x>=intslot1){
            coin[0].play()
            clearInterval(slot1);
            return null;
        }
        slotFruit = document.getElementById("slot1");
        if(slotFruit.className == "a5"){
            slotFruit.className = "a0";
        }
        slotFruit.className = "a" + (parseInt(slotFruit.className.substring(1))+1)
    }
    function spin2(){
        y++;
        if(y>=intslot2){
            coin[1].play()
            clearInterval(slot2);
            return null;
        }
        slotFruit = document.getElementById("slot2");
        if(slotFruit.className == "a5"){
            slotFruit.className = "a0";
        }
        slotFruit.className = "a" + (parseInt(slotFruit.className.substring(1))+1)
    }
    function spin3(){
        z++;
        if(z>=intslot3){
            coin[2].play()
            clearInterval(slot3);
            testWin();
            return null;
        }
        slotFruit = document.getElementById("slot3");
        if(slotFruit.className == "a5"){
            slotFruit.className = "a0";
        }
        sound++;
		if (sound==spin.length){
			sound=0;
		}
		spin[sound].play();
        slotFruit.className = "a" + (parseInt(slotFruit.className.substring(1))+1)
    }
}
function testWin(){
        var slot1 = document.getElementById("slot1").className
        var slot2 = document.getElementById("slot2").className
        var slot3 = document.getElementById("slot3").className
    
        if (((slot1 == slot2 && slot2 == slot3) ||
            (slot1 == slot2 && slot3 == "a5") ||
            (slot1 == slot3 && slot2 == "a5") ||
            (slot2 == slot3 && slot1 == "a5") ||
            (slot1 == slot2 && slot1 == "a5") ||
            (slot1 == slot3 && slot1 == "a5") ||
            (slot2 == slot3 && slot2 == "a5") )){ //&& !(slot1 == slot2 && slot2 == slot3 && slot1=="a5"))
            message.innerHTML = "YOU WIN!";
            win.play();
        }else{
            message.innerHTML = "YOU LOSE!"
            lose.play();
        }
        spinning = false;
}
function toggleAudio(){
	if (!audio){
		audio = !audio;
		for (var i of spin){
			i.volume = 0.5;
		}
		for (var i of coin){
			i.volume = 0.5;
		}
		win.volume = 1.0;
		lose.volume = 1.0;
	}else{
		audio = !audio;
		for (var i of spin){
			i.volume = 0;
		}
		for (var i of coin){
			i.volume = 0;
		}
		win.volume = 0;
		lose.volume = 0;
	}
	document.getElementById("audio").src = "audioicon/audio"+(audio?"On":"Off")+".png";
}

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}   