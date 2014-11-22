var e = {};

$(function() {
  var s = Snap("#svg");
  Snap.load("svg-info.svg", function(f) {
    var element_names = [
		'data_access',
		'hdfs',
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

		s.append(element);
	}


	for(var i in e) {
		e[i].element.transform(e[i].matrix);
	}

	var base = [];
	base.controller = new ScrollMagic();



	new ScrollScene({
	    	triggerElement: '#content-wrapper',
    		offset: 400,
    		duration: 6000
    	})
    	.setPin('#pin')
    	.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 400,
			duration: 1500
		})
		.setTween(new TimelineMax()
			.set(e.hdfs.element, {
				snap: {
				    scale: 2,
				}
			})
			.to(e.hdfs.element, 1, {
				snap: {
				  scale: 1,
				}
			}))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 800,
			duration: 1500
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
			offset: 1900,
			duration: 200
		})
		.setTween(new TimelineMax()
			.set(e.element_1.element, {
				snap: {
				    opacity: 0
				}
			})
			.to(e.element_1.element, 1, {
				snap: {
				  opacity: 1
				}
			}))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 1950,
			duration: 200
		})
		.setTween(new TimelineMax()
			.set(e.element_2.element, {
				snap: {
				    opacity: 0
				}
			})
			.to(e.element_2.element, 1, {
				snap: {
				  opacity: 1
				}
			}))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 2000,
			duration: 200
		})
		.setTween(new TimelineMax()
			.set(e.element_3.element, {
				snap: {
				    opacity: 0
				}
			})
			.to(e.element_3.element, 1, {
				snap: {
				  opacity: 1
				}
			}))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 2050,
			duration: 200
		})
		.setTween(new TimelineMax()
			.set(e.element_4.element, {
				snap: {
				    opacity: 0
				}
			})
			.to(e.element_4.element, 1, {
				snap: {
				  opacity: 1
				}
			}))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 2100,
			duration: 200
		})
		.setTween(new TimelineMax()
			.set(e.element_5.element, {
				snap: {
				    opacity: 0
				}
			})
			.to(e.element_5.element, 1, {
				snap: {
				  opacity: 1
				}
			}))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 2150,
			duration: 200
		})
		.setTween(new TimelineMax()
			.set(e.element_6.element, {
				snap: {
				    opacity: 0
				}
			})
			.to(e.element_6.element, 1, {
				snap: {
				  opacity: 1,
				}
			}))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 2150,
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
			offset: 3150,
			duration: 100
		})
		.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
				{"left": "0"},
				{"left": "100px",
				ease: Linear.easeNone}

			))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 2850,
			duration: 1000
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
			offset: 3850,
			duration: 50
		})
		.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
				{"left": "100px"},
				{"left": "50px",
				ease: Linear.easeNone}

			))
		.addTo(base.controller);

	new ScrollScene({
	    	triggerElement: '#content-wrapper',
			offset: 3650,
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
			offset: 4650,
			duration: 50
		})
		.setTween(TweenMax.fromTo(".scrollContent", 0.5, 
				{"left": "50px"},
				{"left": "0px",
				ease: Linear.easeNone}

			))
		.addTo(base.controller);



	






  });
});