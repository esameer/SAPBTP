sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "student31/com/sap/training/ux402/fullscreen/ux402fullscreen/control/HoverButton",
    "sap/m/MessageToast",
    "student31/com/sap/training/ux402/fullscreen/ux402fullscreen/control/PlaneInfo"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,HoverButton,MessageToast,PlaneInfo) {
        "use strict";

        return Controller.extend("student31.com.sap.training.ux402.fullscreen.ux402fullscreen.controller.Flights", {
            onInit: function () {
                    var oRouter = this.getRouter();
                    oRouter.getRoute("flights").attachMatched(this._onObjectMatched, this);
            },

            getRouter: function(){
                return sap.ui.core.UIComponent.getRouterFor(this);

            },
            _onObjectMatched: function(oEvent){
                var oArgs = oEvent.getParameter("arguments");
                this._sCarrierId = oArgs.carrid;
                var oView = this.getView();
                
                oView.bindElement({
                    path: "/CarrierCollection('" + this._sCarrierId + "')",
                    events:{
                        change: this._onBindingChange.bind(this),
                        dataRequested: function(){
                            oView.setBusy(true);
                        },
                        dataReceived: function(){
                            oView.setBusy(false);
                        },
                        
                    }
                });

            },
            _onBindingChange: function(oEvent){
                var oElementBinding =  this.getView().getElementBinding();

                //No data for the binding
                if(oElementBinding && !oElementBinding.getBoundContext()){
                    this.getRouter().getTargets().display("notFound");
                }
            },

            onNavBack: function(oEvent){
                var oHistory, sPreviousHash;

                oHistory = sap.ui.core.routing.History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if(sPreviousHash !== undefined){
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("overview", true /*no history*/);
                }
            },
            onHover: function (event) {
                var sText= this.getOwnerComponent().getModel("i18n").getProperty("msgSeatAv");
                MessageToast.show(event.getSource().getHoverText()+" "+sText, {duration:1000});
            }
        });
    });
