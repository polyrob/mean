var app = angular.module('app', []);

app.controller('PostsCtrl', function ($scope, $http) {

	$http.get('http://localhost:3000/api/posts')
	.then( function(posts) {
		$scope.posts = posts.data;
	});

	$scope.addPost = function() {

		$http.post('/api/posts', {
			username: 'robiski',
			body: $scope.postBody
		}).then( function(post) {
			$scope.posts.unshift(post.data);
			$scope.postBody = null;
		})
	}
});