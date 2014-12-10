var e = {};

$(function() {
  var s = Snap("#svg");
  Snap.load("svg-canvas2.svg", function(f) {
    var element_names = [
		'data_access',
		'hdfs',
		'yarn',
		'security',
		'operations',
		'governance_integration',
		'element_1',
		'element_2',
		'element_3',
		'element_4',
		'element_5',
		'element_6'
    ];

    
	for(var i in element_names) {
		var element = f.select('#'+element_names[i]),
			matrix = new Snap.Matrix();

		e[element_names[i]] = {
			element: element,
			matrix: matrix
		}; 
		//console.log(element.getBBox());
		s.append(element);
	}

	//s.append(f.select('#Layer_1'));
	
	var base = [];
	base.controller = new ScrollMagic();

		// Pin
		new ScrollScene({
	    	triggerElement: '#content-wrapper',
    		offset: 900,
    		duration: 6000
    	})

    	.setPin('#pin')

  		.addTo(base.controller);

  	// Scene 0
  	new ScrollScene({
	    	triggerElement: '#content-wrapper',
				offset: 500,
				duration: 1800
			})
			
			.setTween(new TimelineMax()
				.set(e.yarn.element, {
					snap: {
					  scale: 2,
					  ty: -1000,
					  opacity: 0
					}
				})
				.to(e.yarn.element, 1, {
					snap: {
						scale: 2,
					  ty: -60,
					  opacity: 1
					}
				})
				.to(e.yarn.element, 1, {
					snap: {
					  scale: 1,
					  ty: 0,
					  opacity: .5
					}
				})
			)

			.addTo(base.controller);

  	// Scene 1
  	new ScrollScene({
	    	triggerElement: '#content-wrapper',
				offset: 1400,
				duration: 900
			})
			
			.setTween(new TimelineMax()
				.set(e.hdfs.element, {
					snap: {
					  scale: 2,
					  opacity: 1
					}
				})
				.to(e.hdfs.element, 1, {
					snap: {
					  scale: 1,
					  opacity: .5
					}
			}))

			.addTo(base.controller);

		new ScrollScene({
				triggerElement: '#content-wrapper',
				duration: 2000
			})

			.setClassToggle("#caption-1", "active") // add class toggle

			.addTo(base.controller);

		new ScrollScene({
				triggerElement: '#content-wrapper',
				offset: 900,
				duration: 1100
			})

			.setClassToggle("#dot-1", "active") // add class toggle

			.addTo(base.controller);	

		// Scene 2
		new ScrollScene({
	   	 triggerElement: '#content-wrapper',
				offset: 1600,
				duration: 1600
			})

		.setTween(new TimelineMax()
			.set(e.data_access.element, {
				snap: {
					opacity: 0,
				    tx: -2000
				}
			})
			.to(e.data_access.element, 1, {
				snap: {
					opacity: 1,
					tx: 0
				}
			}))

			.addTo(base.controller);

		new ScrollScene({
			triggerElement: '#content-wrapper',
				offset: 2000,
				duration: 1700
			})

			.setClassToggle("#caption-2", "active") // add class toggle

			.addTo(base.controller);

		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 2000,
				duration: 1800
			})	
		
			.setClassToggle("#dot-2", "active") // add class toggle

			.addTo(base.controller);

		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 2900,
				duration: 200
			})
			.setTween(new TimelineMax()
				.set(e.element_1.element, {
					snap: {
					    opacity: 0,
					    ty: -50
					}
				})
				.to(e.element_1.element, 1, {
					snap: {
					  opacity: 1,
					  ty: 0
					}
				}))

			.addTo(base.controller);

		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 2950,
				duration: 200
			})
			.setTween(new TimelineMax()
				.set(e.element_2.element, {
					snap: {
					    opacity: 0,
					    ty: -50
					}
				})
				.to(e.element_2.element, 1, {
					snap: {
					  opacity: 1,
					  ty: 0
					}
				}))

			.addTo(base.controller);

		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 3000,
				duration: 200
			})

			.setTween(new TimelineMax()
				.set(e.element_3.element, {
					snap: {
					   opacity: 0,
					   ty: -50
					}
				})
				.to(e.element_3.element, 1, {
					snap: {
					  opacity: 1,
					  ty: 0
					}
				}))

			.addTo(base.controller);

		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 3150,
				duration: 200
			})

			.setTween(new TimelineMax()
				.set(e.element_4.element, {
					snap: {
					   opacity: 0,
					   ty: -50
					}
				})
				.to(e.element_4.element, 1, {
					snap: {
					  opacity: 1,
					  ty: 0
					}
				}))

			.addTo(base.controller);

		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 3200,
				duration: 200
			})

			.setTween(new TimelineMax()
				.set(e.element_5.element, {
					snap: {
					   opacity: 0,
					   ty: -50
					}
				})
				.to(e.element_5.element, 1, {
					snap: {
					  opacity: 1,
					  ty: 0
					}
				}))

			.addTo(base.controller);

		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 3250,
				duration: 200
			})
			.setTween(new TimelineMax()
				.set(e.element_6.element, {
					snap: {
					   opacity: 0,
					   ty: -50
					}
				})
				.to(e.element_6.element, 1, {
					snap: {
					  opacity: 1,
					  ty: 0
					}
				}))

			.addTo(base.controller);

		// Scene 3
		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 2950,
				duration: 1000
			})
			.setTween(new TimelineMax()
				.set(e.governance_integration.element, {
					snap: {
						opacity: 0,
					    tx: -1000
					}
				})
				.to(e.governance_integration.element, 1, {
					snap: {
						opacity: 1,
						tx: 0
					},
					ease: Linear.easeNone
				}))

			.addTo(base.controller);

		new ScrollScene({
	   	 triggerElement: '#content-wrapper',
				offset: 3550,
				duration: 200
			})

		.setTween(new TimelineMax()
			.set(e.data_access.element, {
				snap: {
					opacity: 1
				}
			})
			.to(e.data_access.element, 1, {
				snap: {
					opacity: .25
				}
			}))

			.addTo(base.controller);

		new ScrollScene({
				triggerElement: '#content-wrapper',
				offset: 3700,
				duration: 900
			})

			.setClassToggle("#caption-3", "active") // add class toggle

			.addTo(base.controller);

		new ScrollScene({
				triggerElement: '#content-wrapper',
				offset: 3800,
				duration: 1000
			})

			.setClassToggle("#dot-3", "active") // add class toggle

			.addTo(base.controller);	


		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 3550,
				duration: 100
			})

			.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
					{"left": "0"},
					{"left": "100px",
					ease: Linear.easeNone}

				))

			.addTo(base.controller);

		// Scene 4
		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 3650,
				duration: 1500
			})

			.setTween(new TimelineMax()
				.set(e.security.element, {
					snap: {
						opacity: 0,
					    tx: 1000
					}
				})
				.to(e.security.element, 1, {
					snap: {
						opacity: 1,
						tx: 0
					},
					ease: Linear.easeNone
				}))

			.addTo(base.controller);

		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 4850,
				duration: 200
			})
			.setTween(new TimelineMax()
				.set(e.governance_integration.element, {
					snap: {
						opacity: 1
					}
				})
				.to(e.governance_integration.element, 1, {
					snap: {
						opacity: .25
					},
					ease: Linear.easeNone
				}))

			.addTo(base.controller);
				
		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 4800,
				duration: 800
			})

			.setClassToggle("#caption-4", "active") // add class toggle

			.addTo(base.controller);

		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 4800,
				duration: 1000
			})

			.setClassToggle("#dot-4", "active") // add class toggle

			.addTo(base.controller);		

		// Scene 5
		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 4550,
				duration: 500
			})

			.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
					{"left": "100px"},
					{"left": "0px",
					ease: Linear.easeNone}
				))

			.addTo(base.controller);

		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 5450,
				duration: 1000
			})
			.setTween(new TimelineMax()
				.set(e.operations.element, {
					snap: {
						opacity: 0,
					    tx: 1000
					}
				})
				.to(e.operations.element, 1, {
					snap: {
						opacity: 1,
						tx: 0
					},
					ease: Linear.easeNone
				}))

			.addTo(base.controller);

		new ScrollScene({
		    	triggerElement: '#content-wrapper',
				offset: 5850,
				duration: 500
			})

			.setTween(new TimelineMax()
				.set(e.security.element, {
					snap: {
						opacity: 1
					}
				})
				.to(e.security.element, 1, {
					snap: {
						opacity: .25
					},
					ease: Linear.easeNone
				}))

			.addTo(base.controller);	

		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 5650,
				duration: 2500
			})

			.setClassToggle("#caption-5", "active") // add class toggle

			.addTo(base.controller);

		new ScrollScene({
		    triggerElement: '#content-wrapper',
				offset: 5800,
				duration: 1000
			})

			.setClassToggle("#dot-5", "active") // add class toggle

			.addTo(base.controller);

		new ScrollScene({
		   triggerElement: '#content-wrapper',
				offset: 5550,
				duration: 500
			})
			.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
					{"left": "0px"},
					{"left": "-50px",
					ease: Linear.easeNone}
			))

			.addTo(base.controller); 
			
	  });
});
