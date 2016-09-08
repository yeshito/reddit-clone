'use strict';

const app = angular.module('redditClone', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'index.html',
    controller: 'RedditController'
  })
})

app.controller('RedditController', function ($scope) {
  $scope.reddit = {};
  $scope.reddit.showpostForm = false;
  $scope.reddit.posts = [];
  $scope.reddit.sortProp = 'votes';
  $scope.reddit.sortReverse = true;

  $scope.reddit.Post = function () {
    this.title = $scope.reddit.title;
    this.author = $scope.reddit.author;
    this.imageURL = $scope.reddit.imageURL;
    this.description = $scope.reddit.description;
    this.date = new Date();
    this.comments = [];
    this.addComment = function () {
      this.comments.push({author: this.commentAuthor , comment: this.comment})
    }
    this.clearCommentForm = function () {
      this.commentAuthor = '';
      this.comment = '';
    }
    this.showComments = true;
    this.toggleComments = function () {
      this.showComments = !this.showComments;
    }
    this.votes = 0;
    this.voteUp = function () {
      this.votes++;
    }
    this.voteDown = function () {
      this.votes--;
    }

  };

  $scope.reddit.addPost = function () {
    $scope.reddit.posts.push(new $scope.reddit.Post());
  }
  $scope.reddit.postFormClear = function() {
    $scope.reddit.title='';
    $scope.reddit.author='';
    $scope.reddit.imageURL='';
    $scope.reddit.description='';
  }

})

app.directive('postCard', function () {
    return {
        templateUrl: './partials/postCard.html',
        restrict: 'E',
        scope: {
          postCard: '='
        }
    };
})
