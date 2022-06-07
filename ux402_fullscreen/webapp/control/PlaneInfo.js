sap.ui.define([
    'sap/ui/core/Control',
    "student31/com/sap/training/ux402/fullscreen/ux402fullscreen/control/PlaneInfoRenderer"
], function(Control, PlaneInfoRenderer) {
    'use strict';
    
    return Control.extend("student31.com.sap.training.ux402.fullscreen.ux402fullscreen.control.PlaneInfo",{
        metadata: {
            properties:{
                "seatsMax":{
                    type:"string"
                },
                "seatsOcc":{
                    type:"string"
                },
                "planeType":{
                    type:"string"
                }
            }
        },
        renderer: PlaneInfoRenderer
    });

});