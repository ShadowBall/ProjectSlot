var fruitsound = [new Audio("sounds/fruitsound.mp3"),new Audio("sounds/fruitsound.mp3"),new Audio("sounds/fruitsound.mp3")]
var spin = [new Audio("sounds/spin.mp3")]; //,new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/spin.mp3"),new Audio("sounds/fruitsound.mp3"),new Audio("sounds/fruitsound.mp3")]
var win = new Audio("sounds/win.mp3");
var lose = new Audio("sounds/lose.mp3");
var audio = false;
var spinning = false;
let message = document.getElementById("message")


function spinSlot(){
    if(spinning){return null;}
    spinning = true;
    var change = randomInt(1,4)*5
    var Slot1_Stop = change + randomInt(1,5)
    var Slot2_Stop = change +2*5+randomInt(1,5)
    var Slot3_Stop = change+4*5+randomInt(1,5)

    var x = 0;
    var y = 0;
    var z = 0;
    var sound = 0
    message.innerHTML = "BOOK BOOK BOOOOOOK"
    
    const xyz = [x,y,z];
    const Slot_Stop_Array = [Slot1_Stop,Slot2_Stop,Slot3_Stop];
    const slots = [slot1,slot2,slot3];  //Array needed for each slot
    //const spins = [spin1, spin2, spin3];
   	for (var i = 0; i<3; i++){
	console.log("i on for loop " + i);
	//slots[i] = setInterval(spinslot(spins[i],slots[i],Slot_Stop_Array[i],xyz[i],i),50);	//Speed of each function being called
		IntervalFun(i) //Set i value directly in the interval by using external function
	}	
	
	function IntervalFun(this_i){					//Speed of each function being called
		slots[this_i] = setInterval(function(){
				spinslots(this_i);
				console.log("i on externalfunction " + i);	
			},50);
	}
	
	function spinslots(k){	
		//clearInterval(slots[i]);			
        xyz[k]++;
        console.log("k on spinslots " + k);
        console.log(xyz[k]);
        console.log(Slot_Stop_Array[k]);
        if(xyz[k]>=Slot_Stop_Array[k]){
            fruitsound[k].play()
            clearInterval(slots[k]); //When x reaches Slot_Stop_Array[i], then stop the function from being called
            console.log(k); 
         	if(xyz[2] >= Slot_Stop_Array[2]){
				console.log("k in >=: " + k);
				Winning_Case_Met();	
				return null;
			}	
            return null;
        }
        p = k+1;
        slotFruit = document.getElementById("slot" + p);	
        //console.log("slot" + p);
        console.log(slotFruit);		
        if(slotFruit.className == "a5"){					//If it has reached a5 fruit, then it goes back to a0, and parseInt starts from the first available fruit a1
            slotFruit.className = "a0";
        }
        //if(k=2){
        //sound++;
        /*console.log("Sound is " + sound);
				if (sound==spin.length){
					sound=0;
				}*/
		spin[0].play();
      	slotFruit.className = "a" + (parseInt(slotFruit.className.substring(1))+1)
      	//console.log("if");
    	//}
    	//else{
			//console.log("Else");
			//slotFruit.className = "a" + (parseInt(slotFruit.className.substring(1))+1)
		//}   	
}
}    
    
   /* function spin1(){				
        x++;
        if(x>=intslot1){
            fruitsound[0].play()
            clearInterval(slots[0]);	//When x reaches intslot1, then stop the function from being called
            return null;
        }
        slotFruit = document.getElementById("slot1");			
        if(slotFruit.className == "a5"){					//If it has reached a5 fruit, then it goes back to a0, and parseInt starts from the first available fruit a1
            slotFruit.className = "a0";
        }
        slotFruit.className = "a" + (parseInt(slotFruit.className.substring(1))+1)
    }
    
    function spin2(){
        y++;
        if(y>=intslot2){
            fruitsound[1].play()
            clearInterval(slots[1]);
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
            fruitsound[2].play()
            clearInterval(slots[2]);
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
    }*/


function Winning_Case_Met(){
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
		for (var i of fruitsound){
			i.volume = 0.5;
		}
		win.volume = 1.0;
		lose.volume = 1.0;
	}else{
		audio = !audio;
		for (var i of spin){
			i.volume = 0;
		}
		for (var i of fruitsound){
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