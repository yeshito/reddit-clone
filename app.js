'use strict';

const app = angular.module('redditClone', []);

app.router('/',)

app.controller('RedditController', function ($scope) {
  $scope.reddit = {};
  $scope.reddit.posts = [];
  $scope.reddit.showpostForm = false;

  $scope.reddit.Post = function () {
    this.title = $scope.reddit.title;
    this.author = $scope.reddit.author;
    this.imageURL = $scope.reddit.imageURL;
    this.description = $scope.reddit.description;
    this.date = new Date();
    this.comments = [];
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
   console.log(JSON.stringify($scope.reddit.posts));
  }
})

app.directive('postCard', function () {
    return {
        template: templateString
    };
})

const templateString = `<div class="row">
  <div class="col l12">
    <div class="card horizontal hoverable">
      <div class="card-image">
        <img src="{{post.imageURL}}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <div class="row">
            <div class="col l8">
              <h5>{{post.title}}</h5>
              <h6>by {{post.author}}</h6>
            </div>
            <div class="col l3">
              <a ng-click="post.voteUp()" href=""><i class="small material-icons">thumb_up</i></a>
              <a ng-click="post.voteDown()" href=""><i class="small material-icons">thumb_down</i></a>
            </div>
            <div class="col l1">
              <h5 ng-class="{'color-green': post.votes > 0, 'color-red': post.votes < 0}">{{post.votes}}</h5>
            </div>
          </div>
          <p>{{post.description}}</p>
        </div>
        <div class="card-action">
          <div class="row">
            <div class="col l6">
              <p>{{post.date}}</p>
            </div>
            <div class="col l3">
              <a ng-click="post.votes += 1" class="activator" href=""><i class="material-icons">chat_bubble_outline</i>1 comment</a>
            </div>
            <div class="col l3">
              <a ng-click="post.votes -= 1" class="activator" href=""><i class="material-icons">mode_edit</i>Add Comment</a>
            </div>
          </div>
        </div>
      </div>
      <div class="card-reveal">
        <div class="row showComments">
          <span class="card-title grey-text text-darken-4">Comment<i class="material-icons right">close</i></span>
          <p>Johnny: Why is this guy so amazing!?</p>
          <p>Samantha: Well he works the shit out of shit, and has devoted himself fully. What an expressive player...</p>
        </div>
      </div>
    </div>
  </div>
</div>`
