/**
 * New node file
 */
	$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
			.fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			.fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
		
		// 접힘
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
		// trigger animation by adding a css class
		.setClassToggle("#animate1", "zap")
		.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);

		
		// 색깔 변환
		var animateElem = document.getElementById("animate2");
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 100})
						.on("enter", function () {
							// trigger animation by changing inline style.
							animateElem.style.backgroundColor = "grey";
						})
						.on("leave", function () {
							// reset style
							animateElem.style.backgroundColor = "";
						})
						.addIndicators({name: "2 - change inline style"}) // add indicators (requires plugin)
						.addTo(controller);		
		
		
		// show pin state 텍스트 꾸미기
		function updateBox (e) {
			if (e.type == "enter") {
				$("#pin p").text("Pinned.");
			} else {
				$("#pin p").text("Unpinned.");
			}
		}

		// build scenes
		new ScrollMagic.Scene({triggerElement: "#triggerPin", duration: 400})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#triggerPin", duration: 150, offset: 600})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		
	});