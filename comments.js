// Create web server

// Import modules
const express = require("express");
const router = express.Router();
const { Comment, validate } = require("../models/comment");
const { Post } = require("../models/post");
const auth = require("../middleware/auth");

// Create comment
router.post("/", auth, async (req, res) => {
  // Check input
  const { error } = validate(req.body);
  if (error) return res.status(400).send("Invalid comment.");

  // Check post
  const post = await Post.findById(req.body.postId);
  if (!post) return res.status(400).send("Post not found.");

  // Create comment
  let comment = new Comment({
    content: req.body.content
    });

});