var e = {},
	base = [],
	content_wrapper = '#content-wrapper';

$(function() {
	function addScene(offset, duration, timeline) {
		new ScrollScene({
	    	triggerElement: content_wrapper,
			offset: offset,
			duration: duration
		})
		.setTween(timeline)
		.addTo(base.controller);
	}
	function addCaptionScene(offset, duration, caption) {
		new ScrollScene({
	    triggerElement: content_wrapper,
			offset: offset,
			duration: duration
		})
		.setClassToggle("#caption-"+caption, "active") // add class toggle
		.addTo(base.controller);

		new ScrollScene({
	    triggerElement: content_wrapper,
			offset: offset,
			duration: duration
		})
		.setClassToggle("#dot-"+caption, "active") // add class toggle
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
    	triggerElement: content_wrapper,
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
  			offset: 400,
  			setCaption: 1
  		},
  		{
  			offset: 500,
  			keyframes: {
  				yarn: {scale: 2, ty: -70, opacity: 1},
  				hdfs: {scale: 2, opacity: 1},
  				data_access: {opacity: 0, tx: -2000}
  			}
  		},
  		{
  			offset: 600,
  			setCaption: 2
  		},
  		{
  			offset: 300,
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
  			offset: 150,
  			keyframes: {
  				data_access: {opacity: 1}
			}
  		},
  		{
  			offset: 100, // 3450
  			keyframes: {
  				security: {opacity: 0, tx: 1000},
  				security_pointer: {opacity: 0, tx: 1000}
			},
			setCaption: 3
  		},
  		{
  			offset: 100,
  			keyframes: {
  				data_access: {opacity: .25}
			}
  		},
  		{
  			offset: 200,
  			keyframes: {
  				governance_pointer: {tx: 0, opacity: 1},
  				governance_integration: {opacity: 1, tx: 0}
  			}	
  		},
  		{
  			offset: 400,
  			keyframes: {
  				governance_pointer: {opacity: 1}
  			}	
  		},
  		{
  			offset: 200, //4530
  			keyframes: {
  				governance_pointer: {opacity: 0}
  			}	
  		},
		{
  			offset: 300,
  			keyframes: {
  				governance_integration: {opacity: 1}
  			},
  			setCaption: 4	
  		},
  		{
  			offset: 200,
  			keyframes: {
  				governance_integration: {opacity: .25}
  			}	
  		},
  		{
  			offset: 100, //5150
  			keyframes: {
  				security: {opacity: 1, tx: 0},
  				security_pointer: {opacity: 1, tx: 0},
  				operations: {opacity: 0, tx: 1000},
  				operations_pointer: {opacity: 0, tx: 1000}
  			}	
  		},
  		{
  			offset: 400,
  			keyframes: {
  				security_pointer: {opacity: 1}
  			},
  			setCaption: 5	
  		},
  		{
  			offset: 200,
  			keyframes: {
  				security_pointer: {opacity: 0},
  				security: {opacity: 1}
  			}	
  		},
  		{
  			offset: 500,
  			keyframes: {
  				operations: {opacity: 1, tx: 0},
  				operations_pointer: {opacity: 1, tx: 0},
  				security: {opacity: .25}
  			}	
  		},
  		{
  			offset: 400,
  			keyframes: {
  				operations_pointer: {opacity: 1}
  			}	
  		},
  		{
  			offset: 200,
  			keyframes: {
  				operations_pointer: {opacity: 0}
  			}	
  		},

  	];
  	var overall_offset = 0;
  	var stories = {};
  	var caption_stories = {};

  	

  	//convert from relative time frames to absolute
  	for(var i in frames) {
  		var keyframes = frames[i].keyframes,
  			newCapIndex = frames[i].setCaption;

  		overall_offset += frames[i].offset;

  		for(var element in keyframes) {
  			if(!stories[element]) stories[element] = [];
  			stories[element].push({offset: overall_offset, keyframe: keyframes[element]});
  		}
  		if(newCapIndex) {
  			if(!caption_stories[newCapIndex]) caption_stories[newCapIndex] = {};
  			caption_stories[newCapIndex].offset = overall_offset;

  			if(newCapIndex > 1) {
  				caption_stories[newCapIndex-1].duration = overall_offset - caption_stories[newCapIndex-1].offset;
  			}
  		}
  	}
  	console.log(caption_stories);

  	for(var name in caption_stories) {
  		var duration = caption_stories[name].duration;

  		if(!duration) duration = 1000;

  		addCaptionScene(caption_stories[name].offset, caption_stories[name].duration, name);
  	}
 	for(var name in stories) {
 		var story = stories[name],
 			frame_start = story[0],
 			story_start = frame_start.offset,
 			total_length = story_start,
 			last_frame_offset = story_start;

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


		new ScrollScene({
		    triggerElement: content_wrapper,
				offset: 3600,
				duration: 100
			})

			.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
					{"left": "0"},
					{"left": "100px",
					ease: Linear.easeNone}

				))

			.addTo(base.controller);

		// Scene 4
		


				
		
		// Scene 5
		new ScrollScene({
		    	triggerElement: content_wrapper,
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
		   triggerElement: content_wrapper,
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
