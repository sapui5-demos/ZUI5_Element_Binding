sap.ui.controller("sap.training.view.Main", {

	onInit: function() {

		var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("json/data.json");
		this.getView().setModel(oModel);

	},

	onChange: function(oEvent) {
		var sPath = oEvent.getParameter("selectedItem").getBindingContext().getPath();
		var oListBox = this.getView().byId("myListBox");
		oListBox.bindElement(sPath);
	}

});