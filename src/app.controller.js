portfolioAppController.$inject = ["$rootScope"];

function portfolioAppController($rootScope) {
	$rootScope.$on("$routeChangeStart", function(event, next, current) {
		// Handle events on start of route navigation
	});

	$rootScope.$on("$routeChangeSuccess", function(event, next, current) {
		// Handle events on success of route navigation
	});

	$rootScope.$on("$viewContentLoaded", function(event) {
		// Handle events on view content loading
	})
}
