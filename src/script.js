var routerApp = angular.module('routerApp', ['ui.router', 'ngAnimate', 'ngTouch']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html'
        })
        .state('work', {
            url: '/work',
            templateUrl: 'partial-work.html'
        })
        .state('photography',{
            url: '/photography',
            templateUrl: 'partial-photography.html'
        });
});
routerApp.controller('workController', ['$scope', function($scope){
    $scope.projects = [
        {
            cover: 'img/meuwe.jpg',
            name: 'MEUWE',
            description: "Let your fingers foster love with meuwe, the innovative social interaction platform."
        },
        {
            cover: 'img/vangelist.jpg',
            name: 'VANGELIST',
            description: "Responsive, mobile-friendly user interface with secure PHP back-end for Vangelist, internship portal of Chef's Basket."
        },
        {
            cover: 'img/oblivion.jpg',
            name: '100 MILLION OBLIVION',
            description: "What would you do if you wake up one morning to find a hundred million dollars in your bank account?"
        },
        {
            cover: 'img/photography.jpg',
            name: 'PHOTOGRAPHY',
            description: "Sometimes we never know the true value of a moment until it becomes a memory. Here is it to all countless memories, frozen in time."
        }

    ];
}]);
routerApp.controller('photographyController', ['$scope', function($scope){
    $scope.photos = [
        {src: 'img/photography/event-1.jpg', desc:'Event1'},
        {src: 'img/photography/event-2.jpg', desc:'Event1'},
        {src: 'img/photography/event-3.jpg', desc:'Event1'},
        {src: 'img/photography/event-4.jpg', desc:'Event1'},
        {src: 'img/photography/event-5.jpg', desc:'Event1'},
        {src: 'img/photography/event-6.jpg', desc:'Event1'},
        {src: 'img/photography/event-7.jpg', desc:'Event1'},
        {src: 'img/photography/event-8.jpg', desc:'Event1'},
        {src: 'img/photography/event-9.jpg', desc:'Event1'},
        {src: 'img/photography/nature-1.jpg', desc:'Event1'},
        {src: 'img/photography/nature-2.jpg', desc:'Event1'},
        {src: 'img/photography/nature-3.jpg', desc:'Event1'},
        {src: 'img/photography/nature-4.jpg', desc:'Event1'},
        {src: 'img/photography/nature-5.jpg', desc:'Event1'},
        {src: 'img/photography/nature-6.jpg', desc:'Event1'},
        {src: 'img/photography/nature-7.jpg', desc:'Event1'},
        {src: 'img/photography/nature-8.jpg', desc:'Event1'},
        {src: 'img/photography/nature-9.jpg', desc:'Event1'},
    ];

    $scope._Index = 0;

    $scope.isActive = function (index) {
        return $scope._Index === index;};

    $scope.showPrev = function (){
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length -1;};

    $scope.showNext = function (){
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;};

    $scope.showPhoto = function (index){
        $scope._Index = index;};
}])
