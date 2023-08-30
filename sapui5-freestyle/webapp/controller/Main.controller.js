sap.ui.define(["./BaseController", "sap/m/MessageBox", "sap/m/library", 'sap/ui/model/json/JSONModel'], function (BaseController, MessageBox, mobileLibrary, JSONModel) {
	"use strict";

	var URLHelper = mobileLibrary.URLHelper;

	return BaseController.extend("com.nm.myapp.controller.Main", {
		onInit: function () {

			// HTML string bound to the formatted text control
			var oModel = new JSONModel({
				HTML:
					"<p><strong>Interessen</strong></p>" +
					"<ul><li>Spannende Aufgaben mit echtem Mehrwert für den Kunden und dessen Anwender</li>" +
					"<li>Agile Softwareentwicklung, Software Design und Architektur</li>" +
					"<li>Clean Code, SOLID, TDD, Pair Programming, Design Patterns und Best Practices</li>" +
					"<li>Neue Technologien (z.B. S/4HANA, SAP BTP, ABAP Environment oder ABAP RESTful Application Programming Model)</li></ul>"
			});
			this.getView().setModel(oModel, "view");

		},

		sayHello: function () {
			MessageBox.show("Hello World!");
		},

		onContact: function () {
			URLHelper.triggerEmail("manuel@nonnenmacher-conslting.com", "Info Request", false, false, false, true);
		}
	});
});
