sap.ui.define(["./BaseController", "sap/m/MessageBox", "sap/m/library"], function (BaseController, MessageBox, mobileLibrary) {
	"use strict";

	var URLHelper = mobileLibrary.URLHelper;

	return BaseController.extend("com.nm.myapp.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		},

		onContact: function () {
			URLHelper.triggerEmail("manuel@nonnenmacher-conslting.com", "Info Request", false, false, false, true);
		}
	});
});
