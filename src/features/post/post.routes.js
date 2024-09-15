import express from 'express'
import PostController from './post.controller.js';
// Middleware for handling file uploads
import { upload } from '../../middleware/fileUpload.Middleware.js';

const postRouter = express.Router();
let postController = new PostController();

// Route to get all posts
postRouter.get('/all', postController.getAll);

// Route to get a post by ID
postRouter.get('/:id', postController.getPost);

// Route to get all posts by the current user
postRouter.get('/', postController.getUserPosts);

// Route to create a new post (with image upload)
postRouter.post('/', upload.single('imageUrl'), postController.create);

// Route to delete a post by ID
postRouter.delete('/:id', postController.delete);

// Route to update a post by ID (with image upload)
postRouter.put('/:id', upload.single('imageUrl'), postController.update);

export default postRouter;
