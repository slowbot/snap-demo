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

			e.data_access.matrix.scale(2,2);
			e.data_access.element.animate({ transform: e.data_access.matrix },300);
			e.hdfs.matrix.translate(0,0);
			e.hdfs.matrix.scale(2,2);
			e.hdfs.element.animate({ transform: e.hdfs.matrix },300);

	var base = [];
	base.controller = new ScrollMagic();
	base.masterTimeline = new TimelineMax();

	base.controller.addScene([
	    new ScrollScene({
	    		offset: 200,
	    		duration: 20
	    	}).setTween(base.masterTimeline)
	]);

	function setInitialStates() {
	  var tl = new TimelineMax();
	  tl
	  .set(e.data_access.element, {
	    snap: {
	        tx: 150
	    }
	  });
	  
	  return tl;
	}
	base.masterTimeline
	  .add(setInitialStates())
	  .to(e.data_access.element, 3, {
	    snap: {
	      tx: 0
	    }
	  });


  });
});