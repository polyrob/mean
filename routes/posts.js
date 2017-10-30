var express = require('express');
var Post = require('../models/post');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Post.find( function(err, posts) {
  	if (err) { return next(err); }
  	res.json(posts);
  });
});

router.post('/', function(req, res, next) {
	console.log('post received!', req.body.username, req.body.body)
	var post = new Post({
		username: req.body.username,
		body: req.body.body
	});
	post.save( function(err, post) {
		if (err) { return next(err); }
		res.json(201, post);
	});
});

module.exports = router;
