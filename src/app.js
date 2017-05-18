angular.module("portfolioApp", [
	'ngRoute'
]);

angular.module("portfolioApp")
	.config(require('./app.config.js'));

angular.module("portfolioApp")
	.controller("appController", require('./app.controller.js'));

module.exports = "portfolioApp";
