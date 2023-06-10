const { getPostById, updatePost } = require("../services/db-service.js");



module.exports = async (postId, userId, postPayload) => {
    const post = await getPostById(postId);
  
  
    const updatedPost = {
      ...post,
      title: postPayload.title,
      description: postPayload.description,
    };
    await updatePost(updatedPost);
  };