({
	doInit : function(component, event, helper) {
		var action = component.get("c.getTop10Accounts");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.top10Accounts", response.getReturnValue());
            }
        });
	 $A.enqueueAction(action);
	}
})
