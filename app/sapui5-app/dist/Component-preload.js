//@ui5-bundle sapui5-app/Component-preload.js
sap.ui.require.preload({
	"sapui5-app/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/odata/v2/ODataModel"],function(t,n){"use strict";return t.extend("sapui5-app.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)}})});
},
	"sapui5-app/controller/Main.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("sapui5-app.controller.Main",{onInit:function(){}})});
},
	"sapui5-app/manifest.json":'{"sap.app":{"id":"sapui5-app","type":"application","title":"Planning App","applicationVersion":{"version":"1.0.0"},"dataSources":{"mainService":{"uri":"/catalog/","type":"OData","settings":{"odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"sapui5-app.view.Main","type":"XML","async":true,"id":"mainView"},"dependencies":{"minUI5Version":"1.108.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.comp":{},"sap.ui.generic.app":{}}},"models":{"":{"dataSource":"mainService","preload":true,"settings":{"synchronizeRequests":true},"type":"sap.ui.model.odata.v2.ODataModel"}}}}',
	"sapui5-app/view/Main.view.xml":'<mvc:View\n  xmlns:mvc="sap.ui.core.mvc"\n  xmlns="sap.m"\n  xmlns:smartTable="sap.ui.comp.smarttable"\n  controllerName="sapui5-app.controller.Main"><VBox class="sapUiSmallMargin"><smartTable:SmartTable\n      id="smartTable"\n      entitySet="PlanData"\n      tableType="Table"\n      useVariantManagement="false"\n      useExportToExcel="true"\n      useTablePersonalisation="true"\n      header="Plan Data"\n      enableAutoBinding="true"\n      smartFilterId="smartFilterBar"></smartTable:SmartTable></VBox></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
