sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/library'
], function(jQuery, library) {
    'use strict';
    
    sap.ui.getCore().initLibrary({
        name:"student31.com.sap.training.ux402.controls",
        version:  "1.0.0",
        dependencies:   ["sap.ui.core"],
        types:[],
        interface:[],
        controls:[
            "student31.com.sap.training.ux402.controls.PlaneInfo",
            "student31.com.sap.training.ux402.controls.HoverButton"
        ],
        elements:[

        ],
        noLibraryCSS: true
    });

    return student31.com.sap.training.ux402.controls;

}, /*bExport*/ false);