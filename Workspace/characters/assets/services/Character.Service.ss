
function service(request, response)
{
	'use strict';
	try 
	{
		require('Character.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Character.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}