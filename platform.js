define(["@loader"], function(loader){
	var global = loader.global;

	// Local copy of Node require
	var nodeRequire = loader._nodeRequire;

	var platform = {

		// Node.js
		isNode: typeof process === "object" &&
			{}.toString.call(process) === "[object process]",

		// Cordova
		isCordova: !!global.cordova,

		// NW.js
		isNW: isNode && (function(){
			try {
				return nodeRequire("nw.gui") !== "undefined";
			} catch(e) {
				return false;
			}
		})()

	};

	// Mobile browser (screen size?)

	// Desktop browser
	platform.isDesktopBrowser = !platform.isNode && !platform.isCordova &&
		!platform.isNW;

	return platform;
});