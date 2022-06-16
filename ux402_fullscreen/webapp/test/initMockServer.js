sap.ui.define([
	"student31/com/sap/training/ux402/fullscreen/ux402fullscreen/localService/mockserver"
], function (mockserver) {
	"use strict";

	// initialize the mock server
	mockserver.init();

	// initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});