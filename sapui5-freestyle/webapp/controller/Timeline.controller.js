sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("com.nm.myapp.controller.Timeline", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		},

	});
});