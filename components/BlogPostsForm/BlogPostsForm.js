import React, { useState, useEffect } from "react";
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { addBlogPosts, editBlogPosts } from "../../actions/blogPosts";

const BlogPostsForm = ({ blogPostId, setBlogPostId }) => {
  const [blogInfo, setBlogInfo] = useState({
    creator: "",
    title: "",
    description: "",
    tags: "",
    fileUpload: "",
  });
  const post = useSelector((state) =>
    blogPostId
      ? state.posts.find((message) => message._id === blogPostId)
      : null
  );
  const dispatch = useDispatch();
  const blogPostsStyles = useStyles();
  const [error, setError] = useState("");

  useEffect(() => {
    if (post) setBlogInfo(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation example
    if (!blogInfo.title) {
      setError("Please provide a title for your blog post.");
      return;
    }

    if (blogPostId === 0) {
      dispatch(addBlogPosts(blogInfo));
    } else {
      dispatch(editBlogPosts(blogInfo));
    }

    // Clear the form or perform any other post-submit action
    setBlogInfo({
      creator: "",
      title: "",
      description: "",
      tags: "",
      fileUpload: "",
    });
    setBlogPostId(null); // Reset form state or close modal, etc.
  };

  return (
    <Paper className={blogPostsStyles.paper}>
      <form
        autoComplete="on"
        noValidate
        className={`${blogPostsStyles.root} ${blogPostsStyles.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">
          {blogPostId ? `Update "${post.title}"` : "✨ Create a blog ✨"}
        </Typography>

        {/* Display error message */}
        {error && <Typography variant="body2" color="error">{error}</Typography>}

        {/* Rest of the form */}
        {/* ... */}
      </form>
    </Paper>
  );
};

export default BlogPostsForm;
