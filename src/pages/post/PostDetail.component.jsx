import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getPostDetails,
  getPostComments,
  deletePost,
} from "../../api/communication-manager";

export default function PostDetail(props) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const { postId } = useParams();

  useEffect(() => {
    async function populateData() {
      const response = await getPostDetails(postId);
      setPost(response);
    }
    populateData();
  }, [postId]);

  async function fetchComments() {
    const response = await getPostComments(postId);
    setComments(response);
  }

  function commentClickHandler() {
    comments.length ? setComments([]) : fetchComments();
  }

  async function deleteClickHandler() {
    await deletePost(postId);
    props.history.push(`/user/posts/${post.userId}`);
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deleteClickHandler}>Delete Post</button>
      <h4 onClick={commentClickHandler}>
        {comments.length ? "Hide Comments" : "Show Comments"}
      </h4>
      {comments.length ? <h3>Comments:</h3> : null}
      {comments.map((comment) => (
        <h4 key={comment.id}>{comment.body}</h4>
      ))}
    </div>
  );
}
