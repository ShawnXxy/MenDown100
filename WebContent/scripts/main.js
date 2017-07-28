/***********
 *  Initializing
 ************/
var main = {
		gameInfo : { // game windows size
			width : 0,
			height : 0
		},
		context : null,
		person : null,
		timeQueue : null, 
		time : 0,
		leveltime : 0,
		level : 0,
		imgs : [],
		blocks : [],
		init : function() {
			main.initStart();
		},
		initStart : function() {
			main.initData();
		},
		initData : function() {
			WF.file.imgs(["img/man.png", "img/block.png", "img/move.png", "img/thorn.png", "img/flip.png"], function(img) {
				main.imgs = imgs;
				var canvas = WF.getId("canvas");
				main.gameInfo.width = canvas.offsetWidth;
				main.gameInfo.height = canvas.offsetHeight;
				main.context = canvas.getContext("2d");
				WF.getId("js_start_loading").style.display = "none";
				WF.getId("js_start_btn").style.display = "block";
			});
		}
}
main.init();

var WF = function() {
	function getId(id) {
		return typeof id == "string" ? document.getElementById(id) : id;
	};
	function reg(space, obj) {
		var nameSpace = exports[space] || {};
		for (var key in obj) {
			nameSpace[key] = obj[key];
		}
		exports[space] = nameSpace;
	}
	var exports = {
			getId : getId,
			reg : reg
	};
	return exports;
}();


/*********************************
**	Blocks/Bricks/Barriers in the game
**********************************/