import express from 'express'
import LikeController from './like.controller.js';

const likeRouter = express.Router();
let likeController = new LikeController();

// Route to get all likes for a specific post
likeRouter.get('/:postId', likeController.get)
// Route to toggle the like status for a specific post
likeRouter.get('/toggle/:postId', likeController.toggleLikeStatus)



export default likeRouter;
