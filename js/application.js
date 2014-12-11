var e = {},
	base = [];

$(function() {
	function addScene(offset, duration, timeline) {
		new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: offset,
			duration: duration
		})
		.setTween(timeline)
		.addTo(base.controller);
	}

  var s = Snap("#svg");
  Snap.load("svg-canvas2.svg", function(f) {
    var t,
    	element_names = [
		'data_access',
		'hdfs',
		'yarn',
		'security_pointer',
		'operations_pointer',
		'governance_pointer',
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

  	var frames = [
  		{
  			offset: 500,
  			keyframes: {
  				yarn: {scale: 2, ty: -1000, opacity: 0},
  			}
  		},
  		{
  			offset: 900,
  			keyframes: {
  				yarn: {scale: 2, ty: -70, opacity: 1},
  				hdfs: {scale: 2, opacity: 1},
  				data_access: {opacity: 0, tx: -2000}
  			}
  		},
  		{
  			offset: 900,
  			keyframes: {
  				yarn: {scale: 1, ty: 0, opacity: .5},
  				hdfs: {scale: 1, opacity: .5}
  			}	
  		},
  		{
  			offset: 400,
  			keyframes: {
  				element_1: {opacity: 0, ty: -50}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_2: {opacity: 0, ty: -50},
  				governance_pointer: {tx: -1000, opacity: 0},
  				governance_integration: {opacity: 0, tx: -1000}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_3: {opacity: 0, ty: -50}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_4: {opacity: 0, ty: -50}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_5: {opacity: 0, ty: -50},
  				element_1: {opacity: 1, ty: 0}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_6: {opacity: 0, ty: -50},
  				element_2: {opacity: 1, ty: 0}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_3: {opacity: 1, ty: 0}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_4: {opacity: 1, ty: 0}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_5: {opacity: 1, ty: 0}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				element_6: {opacity: 1, ty: 0}
  			}	
  		},
  		{
  			offset: 50,
  			keyframes: {
  				yarn: {scale: 1, ty: 0, opacity: .5},
  				hdfs: {scale: 1, opacity: .5},
  				data_access: {opacity: 1, tx: 0}
  			}	
  		},
  		{
  			offset: 550,
  			keyframes: {
  				governance_pointer: {tx: 0, opacity: 1},
  				governance_integration: {opacity: 1, tx: 0}
  			}	
  		},
  		{
  			offset: 200,
  			keyframes: {
  				governance_pointer: {opacity: 0}
  			}	
  		},

  	];
  	var overall_offset = 0;
  	var stories = {};

  	//convert from relative time frames to absolute
  	for(var i in frames) {
  		var offset_from_last_frame = frames[i].offset,
  			keyframes = frames[i].keyframes;

  		overall_offset += offset_from_last_frame;
  		//frames[i].offset = overall_offset;

  		for(var element in keyframes) {
  			if(!stories[element]) stories[element] = [];
  			stories[element].push({offset: overall_offset, keyframe: keyframes[element]});
  		}
  	}

 	for(var name in stories) {
 		var story = stories[name];
		var frame_start = story[0];
		var story_start = frame_start.offset;
		var total_length = story_start;
		var last_frame_offset = story_start;
		t = new TimelineMax();
		t.set(e[name].element, {snap: frame_start.keyframe});

  		for(var i = 1; i < story.length; i++) {
  			var frame = story[i];
  			total_length += frame.offset;
			t.to(e[name].element, frame.offset - last_frame_offset, {snap: frame.keyframe});
  			last_frame_offset = frame.offset;	
  		}
		addScene(story_start, last_frame_offset - story_start, t);
  	}	 

  	// Scene 1
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

		

		

		// Scene 3 



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
				duration: 1800
			})

			.setTween(new TimelineMax()
				.set(e.security_pointer.element, {
					snap: {
						opacity: 0,
					    tx: 1000
					}
				})
				.to(e.security_pointer.element, 1, {
					snap: {
						opacity: 1,
						tx: 0
					},
					ease: Linear.easeNone
				})
				.to(e.security_pointer.element, 0.2, {
					snap: {
						opacity: 0,
						tx: 0
					},
					ease: Linear.easeNone
				}))

			.addTo(base.controller);

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
				duration: 1200
			})
			.setTween(new TimelineMax()
				.set(e.operations_pointer.element, {
					snap: {
						opacity: 0,
					    tx: 1000
					}
				})
				.to(e.operations_pointer.element, 1, {
					snap: {
						opacity: 1,
						tx: 0
					},
					ease: Linear.easeNone
				})
				.to(e.operations_pointer.element, 0.2, {
					snap: {
						opacity: 0,
						tx: 0
					},
					ease: Linear.easeNone
				}))

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
