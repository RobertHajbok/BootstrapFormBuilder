define([
       "jquery", 
       "collections/snippets",
       "collections/my-form-snippets", 
       "views/tab",
       "views/my-form",
       "text!data/input.json", "text!data/radio.json", "text!data/select.json", "text!data/button.json",
       "text!templates/app/render.html",  
], function(
  $, 
  SnippetsCollection, 
  MyFormSnippetsCollection,
  TabView,
  MyFormView,
  inputJSON, radioJSON, selectJSON, buttonJSON,
  renderTab
){
  return {
    initialize: function(){ 
    	new TabView({
    		title: "Input",
    		collection: new SnippetsCollection(JSON.parse(inputJSON)),
    	});
    	
    	new TabView({
        	title: "Radios / Checkboxes",
        	collection: new SnippetsCollection(JSON.parse(radioJSON)),
      	});
      	
      	new TabView({
        	title: "Select",
        	collection: new SnippetsCollection(JSON.parse(selectJSON)),
      	});
      	
      	new TabView({
        	title: "Buttons",
        	collection: new SnippetsCollection(JSON.parse(buttonJSON)),
      	});
      	
      	new TabView({
	        title: "Rendered", 
	        content: renderTab
	    });
    	
    	//Make the first tab active!
	    $("#components .tab-pane").first().addClass("active");
	    $("#formtabs li").first().addClass("active");
	     
	     	     
	    new MyFormView({
        	title: "Original", 
        	collection: new MyFormSnippetsCollection([
		          { "title" : "Form Name", 
		            "fields": {
		              "name" : {
		                "label"   : "Form Name", 
		                "type"  : "input", 
		                "value" : "Form Name"
		              }
		            }
		          }
		        ])
		});
  	}
 }
});