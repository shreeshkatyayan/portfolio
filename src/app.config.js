portfolioAppConfig.$inject = ["$locationProvider"];

function portfolioAppConfig($locationProvider) {
	if (window.history && window.history.pushState) {
		$locationProvider.html5Mode({
			enabled : true,
			requireBase : true
		});
	} else {
		$locationProvider.html5Mode(false);
		$locationProvider.hashPrefix = "!";
	}
}

module.exports = portfolioAppConfig;
