function startAd() {



	var container = $("#heartContainer");
	var mainHeadline = $("#headline");

	var head = $("#headline");
	var txt1 = $("#t1");
	var txt2 = $("#t2");
	var txt3 = $("#t3");

	var txt4 = $("#t4");

	var m_cta = $("#cta");



  TweenLite.to(bg, 1, { ease: Expo.easeOut, top:-42})

	TweenLite.to(logo, 1, { ease: Expo.easeOut, opacity:1, top:499, delay:.5});

	TweenLite.to(t1, 1, { ease: Expo.easeOut, opacity:1, top:32, delay:1});

	TweenLite.to(t2, 1, { ease: Expo.easeOut,  opacity:1, top:167, delay:1.2});

	TweenLite.to(cta, 1, { ease: Expo.easeOut,  opacity:1, top:293, delay:1.5});



	// TweenLite.to(txt1, 2.5, { ease: Expo.easeOut, opacity:1, delay:3.2});
	// TweenLite.to(head, 1, { ease: Expo.easeOut, opacity:0, delay:3.2});

	// TweenLite.to(container, 1, { ease: Expo.easeOut, opacity:0, delay:4.5});
	// TweenLite.to(txt2, .5, { left:0, opacity:1, delay:5});


	// TweenLite.to(txt1, 2, { ease: Expo.easeOut, left:-300, delay:7.7});
	// TweenLite.to(txt2, 2, { ease: Expo.easeOut, left:-300, delay:7.7});

	// TweenLite.to(container, .1, { ease: Expo.easeInOut, x:-90, y:-40, delay:7});
	

	// TweenLite.to(head, 2, { ease: Expo.easeOut, opacity:1, delay:8.2});
	// TweenLite.to(txt3, 2, { ease: Expo.easeOut, opacity:1, delay:8.2});

	// TweenLite.to(container, 2, { ease: Expo.easeInOut, opacity:1, delay:8.2});

	// TweenLite.to(txt4, 2, { ease: Expo.easeOut, opacity:1, delay:9.3});

	// TweenLite.to(m_cta, 1, { opacity:1, top:0, delay:9.8});



}


function addListeners() {
	document.getElementById("containerMain").addEventListener("click", clickthrough)
}

function clickthrough() {
	EB.clickthrough()
}

function checkInit() {

	function onInit() {
		
		addListeners();
		startAd();
	}

	//EB.isInitialized() ? onInit() : EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit)
}


startAd();

window.addEventListener("load", checkInit);

var tl = new TimelineLite();

