sap.ui.define(["./BaseController", "sap/m/MessageBox", "sap/m/library", 'sap/ui/model/json/JSONModel'], function (BaseController, MessageBox, mobileLibrary, JSONModel) {
	"use strict";

	var URLHelper = mobileLibrary.URLHelper;

	return BaseController.extend("com.nm.myapp.controller.Main", {
		onInit: function () {

			// HTML string bound to the formatted text control
			var oModel = new JSONModel({
				engineeringHTML:
					"<p><strong>SAP Software und Requirements Engineering</strong></p>" +
					"<ul><li>Module: PP(-PI), HCM, EHSM, LE/WM, QM, MM, Gateway, CRM oder IS-H</li>" +
					"<li>Analyse, Konzeption / Design, Implementierung, Test und Dokumentation</li>" + 
					"<li>Mockups, User Stories, Glossar, UML, Design Thinking</li>" +
					"<li>Analyse und Optimierung Custom Code</li>" +
					"<li>Performanceanalyse und -optimierung</li>" + 
					"<li>Integrative Bewertung von Änderungen</li>" +
					"<li>Fehlerbehebung / Debugging</li>" +
					"<li>Design Patterns, Refactoring, Test Driven Development (TDD)</li></ul>",

				interestsHTML:
					"<p><strong>Interessen</strong></p>" +
					"<ul><li>Spannende Aufgaben mit echtem Mehrwert für den Kunden und dessen Anwender</li>" +
					"<li>Agile Softwareentwicklung, Software Design und Architektur</li>" +
					"<li>Clean Code, SOLID, TDD, Pair Programming, Design Patterns und Best Practices</li>" +
					"<li>Neue Technologien (z.B. S/4HANA, SAP BTP, ABAP Environment oder ABAP RESTful Application Programming Model)</li></ul>"
			});

			// var oSkillModel = new JSONModel("./localService/mockdata/SkillSet.json");
			// var aSkill = oSkillModel.getData();

			var oHelperModel = new JSONModel(sap.ui.require.toUrl("com/nm/myapp/localService/mockdata/SkillSet.json"));
			oHelperModel.attachRequestCompleted(function (oEvent) {
				oModel.setProperty("/Skills", oEvent.getSource().getData());
			});

			this.getView().setModel(oModel, "view");

		},

		onFilterButtonPressed: function () {

		},

		sayHello: function () {
			MessageBox.show("Hello World!");
		},

		onContact: function () {
			URLHelper.triggerEmail("manuel@nonnenmacher-conslting.com", "Info Request", false, false, false, true);
		}
	});
});
