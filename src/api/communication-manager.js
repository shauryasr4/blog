import { urlBuilder } from "../utils/utils";

const getUsers = () => {
  return fetch(
    urlBuilder("users")
  ).then((response) => response.json());
};

const getUserPosts = (userId, skip = 0, limit = 10) => {
  if (!userId) throw new Error("Id is required");
  return fetch(
    urlBuilder("posts/?") +
      new URLSearchParams({
        userId,
        skip,
        limit,
      }).toString()
  ).then((response) => response.json());
};

const getPostDetails = (postId) => {
    if (!postId) throw new Error("Post Id is required");

    return fetch(urlBuilder(`posts/${postId}`)).then((response) =>
      response.json()
    );
}

const getPostComments = (postId) => {
  if (!postId) throw new Error("Post Id is required");

  return fetch(urlBuilder(`posts/${postId}/comments`)).then((response) =>
    response.json()
  );
}

const deletePost = (postId) => {
    if(!postId)
        throw new Error("Post Id is required");
    return fetch(urlBuilder(`posts/${postId}`), {
      method: "delete",
    });
}

export { getUsers, getUserPosts, getPostDetails, getPostComments, deletePost };