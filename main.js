window.onload = function(){
	frame = document.getElementById("frame");
	frames = document.getElementById("frames");
	pscore = document.getElementById("score");
	score = 0;
	curimg = 25;
	oldx = 0;
	loaded = 0;
	preloadframes();
};

function preloadframes(){
	for (i = 0; i <= 50; i++){
		frames.innerHTML += '<img draggable="false" class="frame" id="frame-' + i + '" src="sprites/00' + i + '.jpg"/>';
		if (i == 50){
			loaded = 1;
		};
	};
};

function refreshimg(){
	if (!loaded){return;};
	oldimg = curimg;
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
	//frame.src = "sprites/00" + curimg + ".jpg";
	document.getElementById("frame-" + oldimg).style.display = "none";
	document.getElementById("frame-" + curimg).style.display = "unset";
};