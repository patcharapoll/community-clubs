import 'reflect-metadata';
import Container from 'typedi';
import UserController from '../core/user/controllers/user.controller';
import AuthController from '../core/auth/controllers/auth.controller';

export const userController = Container.get(UserController);
export const authController = Container.get(AuthController);
