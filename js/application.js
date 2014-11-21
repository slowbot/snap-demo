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

	e.hdfs.matrix.translate(-9999,0);
	e.security.matrix.translate(-9999,0);
	e.operations.matrix.translate(-9999,0);
	e.governance_integration.matrix.translate(-9999,0);
	e.element_1.matrix.translate(-9999,0);
	e.element_2.matrix.translate(-9999,0);
	e.element_3.matrix.translate(-9999,0);
	e.element_4.matrix.translate(-9999,0);
	e.element_5.matrix.translate(-9999,0);
	e.element_6.matrix.translate(-9999,0);

	for(var i in e) {
		e[i].element.transform(e[i].matrix);
	}

	var base = [];
	base.controller = new ScrollMagic({
	 // container: '#example-wrapper',
	 // loglevel: 3
	});
	base.masterTimeline = new TimelineMax();

	new ScrollScene({
		    	triggerElement: '#content-wrapper',
	    		offset: 400,
	    		duration: 2000
	    	})
	    	.setPin('#pin')
	    	.setTween(base.masterTimeline)
	    	.addTo(base.controller);

	function setInitialStates() {
	  var tl = new TimelineMax();
	  tl
	  .set(e.data_access.element, {
	    snap: {
	        scale: 2
	    }
	  });
	  
	  return tl;
	}
	base.masterTimeline
	  .add(setInitialStates())
	  .to(e.data_access.element, 1, {
	    snap: {
	      scale: 1
	    }
	  });


  });
});