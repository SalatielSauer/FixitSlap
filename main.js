window.onload = function(){
	frame = document.getElementById("frame");
	pscore = document.getElementById("score");
	score = 0;
	curimg = 25;
	oldx = 0;
};

function refreshimg(){

	if (curimg > 0){
	    if (event.pageX < oldx) {
	        curimg -= 1;
	        update();
	    };
	};

	if (curimg < 50){
		if (event.pageX > oldx) {
	    	curimg += 1;
	    	update();
		    if (curimg == 26){
		    	score++;
		    	pscore.innerHTML = "You slapped Fixit <span style='color: #86f36c'>" + score + "</span> times!";
		    };
	    };
	};

    oldx = event.clientX;
};

function update(){
	frame.src = "sprites/00" + curimg + ".png";
};