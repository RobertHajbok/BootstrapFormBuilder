require.config({
  baseUrl: "Scripts/app/lib/",
  paths: {
	'jquery': '../../jquery-3.1.1',
	'mustache' : "../../mustache",
	'bootstrap' : "../../bootstrap",
	'underscore' :  "../../underscore",
	'text'  : "../../text",
	'app'   : "..",
	 collections : "../collections", 
	 data        : "../data", 
	 models      : "../models", 
	 helper      : "../helper", 
	 templates   : "../templates", 
	 views       : "../views"
  }, shim: {
    'underscore': {
	      exports: '_'
	},  
	  
    'bootstrap': {
      deps: ['jquery'],
      exports: '$.fn.popover'
    }
  }
});

require(['app/app'], function(app){
  app.initialize();
});