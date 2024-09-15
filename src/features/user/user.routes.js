import express from 'express';
import UserController from './user.controller.js';

const userRouter = express.Router();
let userController = new UserController();

// Routes for user registration and login
userRouter.post('/signup', userController.registration);
userRouter.post('/signin', userController.login);

export default userRouter;
