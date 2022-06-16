sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "App";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},

                iShouldSeeTheFlightsPage: function () {
                    return this.waitFor({
                        id: new RegExp("CarrierItem"),
                        viewName: "Carrier",
                        success: function (oCarrierItem) {
                            oCarrierItem[0].$().trigger("press");
                            Opa5.assert.ok(true, "The " + oCarrierItem[0].getId() + " is pressed" );
                        },
                        errorMessage: "Could not find any carrier",
                        timeout:3
                    });
                    
                }

			}
		}
	});

});
