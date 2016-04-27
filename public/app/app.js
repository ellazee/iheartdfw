angular.module("IJApp", ["ui.router"])

.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state(
			'main', 
			{
			url: '/',
			templateUrl: 'app/views/main.html'
			
			})
		.state(
			"about",
			{
				url: "/about",
				templateUrl: "app/views/about.html"
			})
		.state(
			"eschaton",
			{
				url: "/eschaton",
				templateUrl: "app/views/eschaton.html"
			})
		.state(
			"Hal",
			{
				url: "/Hal",
				templateUrl: "app/views/hal.html"
			})
	}
]);
