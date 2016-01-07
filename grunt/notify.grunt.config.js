var constants = require("./constants.grunt.config");

module.exports = {
	dev: {
	    options: {
	      	title: 'Development build',
	      	success: constants.notify.success,
	      	duration: constants.notify.duration,
	      	message: "Completed successfully"
    	}
	},
	production: {
	    options: {
	      	title: 'Production build',
	      	success: constants.notify.success,
	      	duration: constants.notify.duration,
	      	message: "Completed successfully"
   	 	}
   	}
};