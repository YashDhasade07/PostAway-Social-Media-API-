import express from 'express'
import CommentController from './comment.controller.js';

const CommentRouter = express.Router();
let commentController = new CommentController();

CommentRouter.get('/:id', commentController.get)
CommentRouter.post('/:id', commentController.create)
CommentRouter.delete('/:id', commentController.delete)
CommentRouter.put('/:id', commentController.update)


export default CommentRouter;