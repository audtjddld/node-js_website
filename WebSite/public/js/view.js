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
			.setClassToggle("#menu1","active")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
		
		// 접힘
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
		// trigger animation by adding a css class
		.setClassToggle("#animate1", "zap")
//		.setClassToggle("#menu2","active")
		.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);

		
		// 색깔 변환
		var animateElem = document.getElementById("animate2");
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 100})
						.on("enter", function () {
							// trigger animation by changing inline style.
							animateElem.style.backgroundColor = "grey";
//							$("#menu2").removeClass("active");
						})
						.on("leave", function () {
							// reset style
							animateElem.style.backgroundColor = "";
						})
//						.setClassToggle("#menu3","active")
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
			.setClassToggle("#menu4","active")			
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

		new ScrollMagic.Scene({triggerElement: "#triggerPin", duration: 150, offset: 600})
			.setPin("#pin")
			.setClassToggle("#pin", "green")
			.on("enter leave", updateBox)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
		
		// 박스 이동시키기
		// set start offset
		TweenMax.set("#animate3", {left: "-=100"});

		var $box = $("#animate3 p");

		// build tween
		var tween = new TimelineMax()
			.to("#animate3", 2, {top: "+=300", left: "+=200",
					onStart: function () {$box.html("is");},
					onReverseComplete: function () {$box.html("This");}
				}
			)
			.to("#animate3", 2, {top: "-=200",
					onStart: function () {$box.html("the");},
					onReverseComplete: function () {$box.html("is");}
				}
			)
			.to("#animate3", 2, {left: "-=200",
					onStart: function () {$box.html("house");},
					onReverseComplete: function () {$box.html("the");}
				}
			)
			.to("#animate3", 2, {top: "-=100", left: "+=100",
					onStart: function () {$box.html("of");},
					onReverseComplete: function () {$box.html("house");}
				}
			)
			.to("#animate3", 2, {top: "+=100", left: "+=100",
					onStart: function () {$box.html("San...");},
					onReverseComplete: function () {$box.html("of");}
				}
			)
			.to("#animate3", 2, {top: "+=200", left: "-=200",
					onStart: function () {$box.html("...ta");},
					onReverseComplete: function () {$box.html("San...");}
				}
			)
			.to("#animate3", 5, {left: "+=200",
					onStart: function () {$box.html("Clause.");},
					onReverseComplete: function () {$box.html("...ta");}
				}
			);

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger3"})
						.setTween(tween)
						.setClassToggle("#menu5","active")						
						.addIndicators({name: "timeline"}) // add indicators (requires plugin)
						.addTo(controller);


	});
	paceOptions = {
			  ajax: true, // disabled
			  document: false, // disabled
			  eventLag: false, // disabled
			  elements: {
			    selectors: ['div.paceDiv']
			  }
			};
	
	